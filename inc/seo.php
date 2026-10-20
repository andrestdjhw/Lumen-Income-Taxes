<?php

// Meta title del Home definido en el brief. Para las demás páginas se recomienda un plugin SEO.
function lumen_document_title($title) {
  if (is_front_page()) {
    return lumen_t('home.meta_title');
  }
  return $title;
}

add_filter('pre_get_document_title', 'lumen_document_title');

// Schema LocalBusiness solo con datos confirmados (sin horarios ni ratings hasta validarlos).
function lumen_local_business_schema() {
  if (!is_front_page()) {
    return;
  }

  $site = lumen_site();
  $schema = array(
    '@context'  => 'https://schema.org',
    '@type'     => 'LocalBusiness',
    'name'      => $site['name'],
    'url'       => home_url('/'),
    'telephone' => $site['phone_e164'],
    'address'   => array(
      '@type'           => 'PostalAddress',
      'streetAddress'   => $site['street'],
      'addressLocality' => $site['city'],
      'addressRegion'   => $site['region'],
      'postalCode'      => $site['postal_code'],
      'addressCountry'  => 'US',
    ),
    'sameAs'    => array($site['facebook']),
  );

  printf("<script type=\"application/ld+json\">%s</script>\n", wp_json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE));
}

add_action('wp_head', 'lumen_local_business_schema');
