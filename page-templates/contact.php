<?php
/*
 * Template Name: Contact
 */

get_header(); ?>

<main id="main">
  <?php get_template_part('template-parts/page-hero', null, array(
    'eyebrow' => lumen_t('contact.eyebrow'),
    'title'   => lumen_t('contact.title'),
    'text'    => lumen_t('contact.intro'),
    'cta'     => lumen_t('contact.schedule'),
  )); ?>

  <?php get_template_part('template-parts/contact', null, array('show_heading' => false)); ?>
  <?php get_template_part('template-parts/page-faq', null, array('page' => 'contact')); ?>
</main>

<?php get_footer();
