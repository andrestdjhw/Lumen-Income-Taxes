<?php

// Idioma actual. Con Polylang activo se usa su idioma; sin Polylang se permite ?lang=es para previsualizar.
function lumen_lang() {
  if (function_exists('pll_current_language') && pll_current_language()) {
    return pll_current_language('slug') === 'es' ? 'es' : 'en';
  }
  return (isset($_GET['lang']) && $_GET['lang'] === 'es') ? 'es' : 'en';
}

// Todo el copy bilingüe vive en inc/copy/*.php como 'clave' => array('en' => '', 'es' => '').
function lumen_copy() {
  static $copy = null;
  if ($copy === null) {
    $copy = array();
    foreach (glob(get_theme_file_path('/inc/copy/*.php')) as $file) {
      $copy = array_merge($copy, include $file);
    }
  }
  return $copy;
}

function lumen_t($key) {
  $copy = lumen_copy();
  if (!isset($copy[$key])) {
    return $key;
  }
  return $copy[$key][lumen_lang()] ?? $copy[$key]['en'];
}

// Escapa el texto y convierte *palabra* en un resaltado de color de marca.
function lumen_format($text) {
  return preg_replace('/\*(.+?)\*/', '<span class="text-cianotipo">$1</span>', esc_html($text));
}

function lumen_e($key) {
  echo lumen_format(lumen_t($key));
}

function lumen_with_lang($url) {
  if ($url === '' || function_exists('pll_current_language') || lumen_lang() === 'en') {
    return $url;
  }
  return add_query_arg('lang', 'es', $url);
}

function lumen_lang_urls() {
  if (function_exists('pll_the_languages')) {
    $urls = array();
    foreach (pll_the_languages(array('raw' => 1, 'hide_if_no_translation' => 0)) as $language) {
      $urls[$language['slug']] = $language['url'];
    }
    return $urls;
  }
  return array(
    'en' => remove_query_arg('lang'),
    'es' => add_query_arg('lang', 'es'),
  );
}

function lumen_language_attributes($output) {
  if (function_exists('pll_current_language') || lumen_lang() !== 'es') {
    return $output;
  }
  return preg_replace('/lang="[^"]*"/', 'lang="es"', $output);
}

add_filter('language_attributes', 'lumen_language_attributes');
