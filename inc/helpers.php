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
  $business = lumen_page_url('business');

  return array(
    array('key' => 'individual', 'icon' => 'user', 'url' => lumen_page_url('individual')),
    array('key' => 'self_employed', 'icon' => 'briefcase', 'url' => $business . '#self-employed'),
    array('key' => 'small_business', 'icon' => 'store', 'url' => $business . '#small-business'),
  );
}

function lumen_nav() {
  $items = array();
  foreach (lumen_services() as $service) {
    $items[] = array('key' => $service['key'], 'label' => lumen_t('nav.' . $service['key']), 'url' => $service['url'], 'current' => false);
  }
  foreach (array('process', 'about', 'faq', 'contact') as $template) {
    $items[] = array(
      'key'     => $template,
      'label'   => lumen_t("nav.$template"),
      'url'     => lumen_page_url($template),
      'current' => lumen_page_id($template) && is_page(lumen_page_id($template)),
    );
  }
  $items[0]['current'] = lumen_page_id('individual') && is_page(lumen_page_id('individual'));

  return $items;
}

// Datos que consumen los componentes de React (window.lumenData).
function lumen_js_data() {
  $site = lumen_site();

  $strings = array();
  foreach (array_keys(lumen_copy()) as $key) {
    if (preg_match('/^(nav|cta|footer|form|chat|a11y)\./', $key)) {
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
    'strings'    => $strings,
    'nav'        => lumen_nav(),
    'site'       => array(
      'name'          => $site['name'],
      'phone'         => $site['phone'],
      'phoneHref'     => 'tel:' . $site['phone_e164'],
      'addressLine1'  => $site['street'],
      'addressLine2'  => "{$site['city']}, {$site['region']} {$site['postal_code']}",
      'bookingUrl'    => $site['booking_url'],
      'facebook'      => $site['facebook'],
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
      'legal'    => array_values(array_filter(array(
        $link('footer.privacy', get_privacy_policy_url()),
      ), function ($item) {
        return $item['url'] !== '';
      })),
    ),
    'rest'       => array('contact' => rest_url('lumen/v1/contact')),
    'year'       => (int) date('Y'),
  );
}

// Íconos SVG de línea (basados en Lucide).
function lumen_icon_svg($name, $class = 'h-6 w-6') {
  $paths = array(
    'arrow-right'  => '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    'check'        => '<path d="M20 6 9 17l-5-5"/>',
    'check-circle' => '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    'phone'        => '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    'map-pin'      => '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    'calendar'     => '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    'user'         => '<circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 0 0-16 0"/>',
    'users'        => '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    'briefcase'    => '<rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    'store'        => '<path d="M3 9 4.5 4h15L21 9"/><path d="M3 9h18v2a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0Z"/><path d="M5 13v8h14v-8"/><path d="M10 21v-5h4v5"/>',
    'message'      => '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    'folder'       => '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
    'file-text'    => '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M8 13h8M8 17h8M8 9h2"/>',
    'receipt'      => '<path d="M4 2v20l3-2 3 2 3-2 3 2 3-2 3 2V2l-3 2-3-2-3 2-3-2-3 2Z"/><path d="M8 8h8M8 12h8M8 16h5"/>',
    'id-card'      => '<rect width="20" height="16" x="2" y="4" rx="2"/><circle cx="8" cy="11" r="2"/><path d="M5 16a3 3 0 0 1 6 0M14 10h4M14 14h4"/>',
    'heart'        => '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    'star'         => '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
    'shield'       => '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
    'scale'        => '<path d="M12 3v18M7 21h10M3 7h18"/><path d="m6 7-3 7a3 3 0 0 0 6 0Z"/><path d="m18 7-3 7a3 3 0 0 0 6 0Z"/>',
    'eye'          => '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
    'plus'         => '<path d="M5 12h14M12 5v14"/>',
    'image'        => '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21"/>',
  );

  if (!isset($paths[$name])) {
    return '';
  }

  return sprintf(
    '<svg class="%s shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">%s</svg>',
    esc_attr($class),
    $paths[$name]
  );
}

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
