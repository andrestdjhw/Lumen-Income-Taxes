<?php
/*
 * Template Name: FAQs
 */

get_header(); ?>

<main id="main">
  <?php get_template_part('template-parts/page-hero', null, array(
    'eyebrow' => lumen_t('nav.faq'),
    'title'   => lumen_t('faq.hero.title'),
    'text'    => lumen_t('faq.hero.text'),
  )); ?>

  <section class="py-16 lg:py-24">
    <div class="container-site max-w-4xl">
      <h2 class="text-2xl font-bold"><?php lumen_e('faq.group'); ?></h2>
      <div class="mt-6">
        <?php get_template_part('template-parts/faq-list'); ?>
      </div>
    </div>
  </section>

  <?php get_template_part('template-parts/cta-band'); ?>
</main>

<?php get_footer();
