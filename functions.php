<?php

require_once get_theme_file_path('/inc/site-data.php');
require_once get_theme_file_path('/inc/i18n.php');
require_once get_theme_file_path('/inc/helpers.php');
require_once get_theme_file_path('/inc/seo.php');

function lumen_load_assets() {
  $asset = include get_theme_file_path('/build/index.asset.php');

  wp_enqueue_style('lumen-fonts', 'https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;600;700;800&display=swap', array(), null);
  wp_enqueue_style('lumen-main', get_theme_file_uri('/build/index.css'), array('lumen-fonts'), filemtime(get_theme_file_path('/build/index.css')));

  wp_enqueue_script('lumen-main', get_theme_file_uri('/build/index.js'), $asset['dependencies'], $asset['version'], true);
  wp_add_inline_script('lumen-main', 'window.lumenData = ' . wp_json_encode(lumen_js_data()) . ';', 'before');
}

add_action('wp_enqueue_scripts', 'lumen_load_assets');

function lumen_resource_hints($urls, $relation_type) {
  if ($relation_type === 'preconnect') {
    $urls[] = array('href' => 'https://fonts.gstatic.com', 'crossorigin');
  }
  return $urls;
}

add_filter('wp_resource_hints', 'lumen_resource_hints', 10, 2);

function lumen_add_support() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  add_theme_support('html5', array('search-form', 'gallery', 'caption', 'style', 'script'));
}

add_action('after_setup_theme', 'lumen_add_support');

// Logo oficial en la pantalla de inicio de sesión de WordPress.
function lumen_login_logo() {
  printf(
    '<style>#login h1 a { background: url(%s) center / contain no-repeat; width: 260px; height: 77px; }</style>',
    esc_url(get_theme_file_uri('/assets/brand/wordmark.png'))
  );
}

add_action('login_enqueue_scripts', 'lumen_login_logo');

function lumen_login_logo_url() {
  return home_url('/');
}

add_filter('login_headerurl', 'lumen_login_logo_url');

function lumen_login_logo_text() {
  return lumen_site()['name'];
}

add_filter('login_headertext', 'lumen_login_logo_text');

// Redirección 301 de URLs antiguas (WordPress no guarda los slugs viejos de las páginas).
// La página combinada "Business Tax Support" se separó en Self-Employed y Small Business.
function lumen_legacy_redirects() {
  if (!is_404()) {
    return;
  }
  $legacy = array('business-tax-support' => 'self-employed');
  $path = trim((string) parse_url($_SERVER['REQUEST_URI'] ?? '', PHP_URL_PATH), '/');
  if (isset($legacy[$path]) && lumen_page_url($legacy[$path])) {
    wp_safe_redirect(lumen_page_url($legacy[$path]), 301);
    exit;
  }
}

add_action('template_redirect', 'lumen_legacy_redirects');
