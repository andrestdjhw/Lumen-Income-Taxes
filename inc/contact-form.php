<?php

// Endpoint del formulario de contacto (componente React ContactForm).
// No se guarda nada en la base de datos: solo se envía un aviso por email.
// El brief prohíbe recolectar SSN, formularios fiscales o datos bancarios por este medio.

function lumen_register_contact_route() {
  register_rest_route('lumen/v1', '/contact', array(
    'methods'             => 'POST',
    'callback'            => 'lumen_handle_contact',
    'permission_callback' => '__return_true',
  ));
}

add_action('rest_api_init', 'lumen_register_contact_route');

function lumen_contact_error($code, $status = 400) {
  return new WP_REST_Response(array('success' => false, 'code' => $code), $status);
}

function lumen_handle_contact(WP_REST_Request $request) {
  // Honeypot: un campo oculto que solo llenan los bots.
  if ($request->get_param('website')) {
    return new WP_REST_Response(array('success' => true), 200);
  }

  $rate_key = 'lumen_contact_' . md5($_SERVER['REMOTE_ADDR'] ?? '');
  $attempts = (int) get_transient($rate_key);
  if ($attempts >= 5) {
    return lumen_contact_error('rate_limited', 429);
  }

  $interests = array(
    'individual' => 'Individual Taxes',
    'business'   => 'Business Taxes',
    'irs'        => 'IRS Notice',
    'other'      => 'Other',
  );

  $name      = sanitize_text_field((string) $request->get_param('name'));
  $phone     = sanitize_text_field((string) $request->get_param('phone'));
  $raw_email = trim((string) $request->get_param('email'));
  $email     = sanitize_email($raw_email);
  $language  = $request->get_param('language') === 'es' ? 'Spanish' : 'English';
  $interest  = $interests[$request->get_param('interest')] ?? 'Other';
  $message   = mb_substr(sanitize_textarea_field((string) $request->get_param('message')), 0, 1000);

  if ($name === '' || $phone === '') {
    return lumen_contact_error('required');
  }
  if (strlen(preg_replace('/\D/', '', $phone)) < 10) {
    return lumen_contact_error('invalid_phone');
  }
  if ($raw_email !== '' && !is_email($email)) {
    return lumen_contact_error('invalid_email');
  }
  if (!rest_sanitize_boolean($request->get_param('consent'))) {
    return lumen_contact_error('consent');
  }
  // Rechaza mensajes que parecen incluir un número de Seguro Social.
  if (preg_match('/\b\d{3}[-\s]?\d{2}[-\s]?\d{4}\b/', $message)) {
    return lumen_contact_error('sensitive');
  }

  $body = implode("\n", array(
    "Name: $name",
    "Phone: $phone",
    'Email: ' . ($email ?: '—'),
    "Preferred language: $language",
    "Interested in: $interest",
    '',
    'Message:',
    $message ?: '—',
    '',
    'Source: ' . esc_url_raw(wp_get_referer() ?: home_url('/')),
  ));

  $headers = array();
  if ($email) {
    $headers[] = "Reply-To: $name <$email>";
  }

  $recipient = apply_filters('lumen_contact_recipient', get_option('admin_email'));
  if (!wp_mail($recipient, "[Lumen Income Tax] New request from $name", $body, $headers)) {
    return lumen_contact_error('send_failed', 500);
  }

  set_transient($rate_key, $attempts + 1, HOUR_IN_SECONDS);

  return new WP_REST_Response(array('success' => true), 200);
}
