<?php

require_once get_theme_file_path('/inc/site-data.php');
require_once get_theme_file_path('/inc/i18n.php');
require_once get_theme_file_path('/inc/helpers.php');
require_once get_theme_file_path('/inc/contact-form.php');
require_once get_theme_file_path('/inc/seo.php');

function lumen_load_assets() {
  $asset = include get_theme_file_path('/build/index.asset.php');

  wp_enqueue_style('lumen-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:wght@600;700&display=swap', array(), null);
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
