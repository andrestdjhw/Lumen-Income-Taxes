<?php

// Busca la página publicada que usa page-templates/{$template}.php (en el idioma actual si hay Polylang).
function lumen_page_id($template) {
  static $cache = array();
  $cache_key = $template . '-' . lumen_lang();

  if (!isset($cache[$cache_key])) {
    $args = array(
      'post_type'      => 'page',
      'post_status'    => 'publish',
      'posts_per_page' => 1,
      'fields'         => 'ids',
      'meta_key'       => '_wp_page_template',
      'meta_value'     => "page-templates/$template.php",
    );
    if (function_exists('pll_current_language')) {
      $args['lang'] = lumen_lang();
    }
    $ids = get_posts($args);
    $cache[$cache_key] = $ids ? $ids[0] : 0;
  }

  return $cache[$cache_key];
}

function lumen_page_url($template) {
  if ($template === 'home') {
    return lumen_with_lang(function_exists('pll_home_url') ? pll_home_url() : home_url('/'));
  }
  $id = lumen_page_id($template);
  return $id ? lumen_with_lang(get_permalink($id)) : '';
}

function lumen_services() {
  return array(
    array('key' => 'individual', 'icon' => 'user', 'url' => lumen_page_url('individual'), 'template' => 'individual'),
    array('key' => 'self_employed', 'icon' => 'briefcase', 'url' => lumen_page_url('self-employed'), 'template' => 'self-employed'),
    array('key' => 'small_business', 'icon' => 'store', 'url' => lumen_page_url('small-business'), 'template' => 'small-business'),
  );
}

function lumen_is_page($template) {
  return lumen_page_id($template) && is_page(lumen_page_id($template));
}

// Navegación principal. Los servicios se agrupan en el mega menú "Services" (children).
function lumen_nav() {
  $services = array();
  foreach (lumen_services() as $service) {
    $services[] = array(
      'key'     => $service['key'],
      'label'   => lumen_t('nav.' . $service['key']),
      'text'    => lumen_t("service.{$service['key']}.text"),
      'icon'    => $service['icon'],
      'url'     => $service['url'],
      'current' => lumen_is_page($service['template']),
    );
  }

  $items = array(array(
    'key'      => 'services',
    'label'    => lumen_t('nav.services'),
    'url'      => '',
    'current'  => lumen_is_page('individual') || lumen_is_page('self-employed') || lumen_is_page('small-business'),
    'children' => $services,
  ));
  foreach (array('process', 'about', 'faq', 'contact') as $template) {
    $items[] = array(
      'key'     => $template,
      'label'   => lumen_t("nav.$template"),
      'url'     => lumen_page_url($template),
      'current' => lumen_is_page($template),
    );
  }

  return $items;
}

// Lista plana de enlaces de la navegación (sin el agrupador del mega menú).
function lumen_nav_links() {
  $links = array();
  foreach (lumen_nav() as $item) {
    foreach (empty($item['children']) ? array($item) : $item['children'] as $link) {
      $links[] = $link;
    }
  }
  return $links;
}

// Atributos de animación al hacer scroll (ver src/lib/reveal.js).
// $type: up | left | right | zoom | photo. $index escalona los elementos de una lista.
function lumen_reveal($type = 'up', $index = 0) {
  $attrs = sprintf(' data-reveal="%s"', esc_attr($type));
  if ($index) {
    $attrs .= sprintf(' style="--reveal-delay: %dms"', $index * 110);
  }
  return $attrs;
}

// Preguntas generales destacadas (Home): las $per_group primeras de cada grupo de la página FAQs.
function lumen_faq_featured($per_group = 2) {
  $items = array();
  foreach (lumen_t('faq.groups') as $group) {
    $items = array_merge($items, array_slice($group['items'], 0, $per_group));
  }
  return $items;
}

// Enlaces legales del footer (solo los de páginas publicadas). Privacidad: la página de privacidad de WordPress
// (Ajustes → Privacidad); Términos: la página con slug terms-and-conditions.
function lumen_legal_links() {
  $terms = get_page_by_path('terms-and-conditions');
  $links = array(
    array('label' => lumen_t('footer.privacy'), 'url' => lumen_with_lang(get_privacy_policy_url())),
    array('label' => lumen_t('footer.terms'), 'url' => ($terms && $terms->post_status === 'publish') ? lumen_with_lang(get_permalink($terms)) : ''),
  );
  return array_values(array_filter($links, function ($item) {
    return $item['url'] !== '';
  }));
}

// Banda CTA global (se imprime en footer.php en todo el sitio).
// Una plantilla puede personalizarla llamando lumen_cta_band(array(...)) antes de get_footer().
function lumen_cta_band($args = null) {
  static $current = array();
  if ($args !== null) {
    $current = $args;
  }
  return $current;
}

// Redes sociales en el orden de inc/site-data.php. 'url' vacío = todavía sin enlace (se muestra sin clic).
function lumen_social_links() {
  $labels = array(
    'facebook'  => 'Facebook',
    'instagram' => 'Instagram',
    'tiktok'    => 'TikTok',
    'linkedin'  => 'LinkedIn',
    'google'    => lumen_t('topbar.google'),
    'bbb'       => lumen_t('topbar.bbb'),
  );

  $links = array();
  foreach (lumen_site()['social'] as $key => $url) {
    $links[] = array('key' => $key, 'label' => $labels[$key], 'url' => $url);
  }
  return $links;
}

// Datos que consumen los componentes de React (window.lumenData).
function lumen_js_data() {
  $site = lumen_site();

  $strings = array();
  foreach (array_keys(lumen_copy()) as $key) {
    if (preg_match('/^(nav|topbar|cta|footer|form|chat|cookie|a11y)\./', $key)) {
      $strings[$key] = lumen_t($key);
    }
  }

  $link = function ($label_key, $url) {
    return array('label' => lumen_t($label_key), 'url' => $url);
  };

  $services = array();
  foreach (lumen_services() as $service) {
    $services[] = $link('nav.' . $service['key'], $service['url']);
  }

  return array(
    'lang'       => lumen_lang(),
    'langLinks'  => lumen_lang_urls(),
    'homeUrl'    => lumen_page_url('home'),
    'contactUrl' => lumen_page_url('contact'),
    'faqUrl'     => lumen_page_url('faq'),
    'privacyUrl' => lumen_with_lang(get_privacy_policy_url()),
    'strings'    => $strings,
    'nav'        => lumen_nav(),
    'site'       => array(
      'name'          => $site['name'],
      'phone'         => $site['phone'],
      'phoneHref'     => 'tel:' . $site['phone_e164'],
      'email'         => $site['email'],
      'address'       => "{$site['street']}, {$site['city']}, {$site['region']} {$site['postal_code']}",
      'mapsUrl'       => $site['maps_url'],
      'social'        => lumen_social_links(),
      'addressLine1'  => $site['street'],
      'addressLine2'  => "{$site['city']}, {$site['region']} {$site['postal_code']}",
      'bookingUrl'    => $site['booking_url'],
      'directionsUrl' => $site['directions_url'],
    ),
    'footer'     => array(
      'services' => $services,
      'company'  => array(
        $link('nav.process', lumen_page_url('process')),
        $link('nav.about', lumen_page_url('about')),
        $link('nav.faq', lumen_page_url('faq')),
        $link('nav.contact', lumen_page_url('contact')),
      ),
      'legal'    => lumen_legal_links(),
    ),
    'logos'      => array(
      'wordmark' => get_theme_file_uri('/assets/brand/wordmark.png'),
      'seal'     => get_theme_file_uri('/assets/brand/seal.png'),
      'symbol'   => get_theme_file_uri('/assets/brand/symbol.png'),
    ),
    'rest'       => array('contact' => rest_url('lumen/v1/contact')),
    'year'       => (int) date('Y'),
  );
}

// Datos de una foto de assets/images/{$key}.webp (null si todavía no existe).
function lumen_photo($key) {
  $file = "/assets/images/$key.webp";
  $path = get_theme_file_path($file);
  if (!file_exists($path)) {
    return null;
  }

  $size = getimagesize($path);
  return array(
    'url'    => get_theme_file_uri($file) . '?v=' . filemtime($path),
    'alt'    => lumen_t("photo.$key"),
    'width'  => (int) $size[0],
    'height' => (int) $size[1],
  );
}

// Íconos de apoyo de la marca (assets/icons.json, compartido con React).
function lumen_icons() {
  static $icons = null;
  if ($icons === null) {
    $icons = json_decode(file_get_contents(get_theme_file_path('/assets/icons.json')), true);
  }
  return $icons;
}

// Atributos del rayado de marca: la máscara #lumen-hatch se define una vez en lumen_icon_defs().
define('LUMEN_HATCH_ATTRS', 'fill="currentColor" stroke="none" mask="url(#lumen-hatch)"');

function lumen_icon_svg($name, $class = 'h-6 w-6') {
  $icons = lumen_icons();
  if (!isset($icons[$name])) {
    return '';
  }

  return sprintf(
    '<svg class="lumen-icon %s shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">%s</svg>',
    esc_attr($class),
    str_replace('data-hatch', LUMEN_HATCH_ATTRS, $icons[$name])
  );
}

// Máscara del rayado diagonal (repite la zona revelada del isotipo). Se imprime una vez al inicio del <body>.
function lumen_icon_defs() { ?>
  <svg width="0" height="0" class="absolute" aria-hidden="true" focusable="false">
    <defs>
      <pattern id="lumen-hatch-lines" width="3.2" height="3.2" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="1.4" height="3.2" fill="white" />
      </pattern>
      <!-- Degradados de los íconos (ver .lumen-icon en src/index.css): oscuro para fondos claros, claro para fondos oscuros. -->
      <linearGradient id="lumen-icon-dark" gradientUnits="userSpaceOnUse" x1="16" y1="24" x2="8" y2="0">
        <stop offset="0" stop-color="#1e3a6b" />
        <stop offset="0.55" stop-color="#3b66a3" />
        <stop offset="1" stop-color="#1e3a6b" />
      </linearGradient>
      <linearGradient id="lumen-icon-light" gradientUnits="userSpaceOnUse" x1="16" y1="24" x2="8" y2="0">
        <stop offset="0" stop-color="#ffffff" />
        <stop offset="0.55" stop-color="#cfe0f1" />
        <stop offset="1" stop-color="#ffffff" />
      </linearGradient>
      <mask id="lumen-hatch" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <rect width="24" height="24" fill="url(#lumen-hatch-lines)" />
      </mask>
    </defs>
  </svg>
<?php }

add_action('wp_body_open', 'lumen_icon_defs');

function lumen_icon($name, $class = 'h-6 w-6') {
  echo lumen_icon_svg($name, $class);
}

// Botón principal: agenda en Calendly.
function lumen_book_button($label = null, $class = 'btn-primary') {
  printf(
    '<a href="%s" class="btn %s" target="_blank" rel="noopener" data-track="click_book">%s%s</a>',
    esc_url(lumen_site()['booking_url']),
    esc_attr($class),
    esc_html($label ?? lumen_t('cta.book')),
    lumen_icon_svg('arrow-right', 'h-4 w-4')
  );
}

// Botón secundario: llamada telefónica.
function lumen_call_button($class = 'btn-outline') {
  $site = lumen_site();
  printf(
    '<a href="%s" class="btn %s" data-track="click_call">%s%s</a>',
    esc_attr('tel:' . $site['phone_e164']),
    esc_attr($class),
    lumen_icon_svg('phone', 'h-4 w-4'),
    esc_html(sprintf(lumen_t('cta.call'), $site['phone']))
  );
}
