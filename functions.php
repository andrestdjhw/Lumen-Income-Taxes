<?php

function lumen_load_assets() {
  $asset = include get_theme_file_path('/build/index.asset.php');

  wp_enqueue_script('lumen-main', get_theme_file_uri('/build/index.js'), $asset['dependencies'], $asset['version'], true);
  wp_enqueue_style('lumen-main', get_theme_file_uri('/build/index.css'), array(), filemtime(get_theme_file_path('/build/index.css')));
}

add_action('wp_enqueue_scripts', 'lumen_load_assets');

function lumen_add_support() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  add_theme_support('html5', array('search-form', 'gallery', 'caption', 'style', 'script'));
}

add_action('after_setup_theme', 'lumen_add_support');
