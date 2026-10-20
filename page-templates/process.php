<?php
/*
 * Template Name: Our Process
 */

get_header(); ?>

<main id="main">
  <?php get_template_part('template-parts/page-hero', null, array(
    'eyebrow' => lumen_t('nav.process'),
    'title'   => lumen_t('process.hero.title'),
    'text'    => lumen_t('process.hero.text'),
  )); ?>

  <section class="py-16 lg:py-24">
    <div class="container-site">
      <?php get_template_part('template-parts/section-heading', null, array(
        'eyebrow' => lumen_t('process.steps.eyebrow'),
        'title'   => lumen_t('process.steps.title'),
      )); ?>
      <div class="mt-16">
        <?php get_template_part('template-parts/process-steps'); ?>
      </div>
    </div>
  </section>

  <section class="bg-brand-50 py-16 lg:py-24">
    <div class="container-site grid items-center gap-10 lg:grid-cols-5">
      <div class="lg:col-span-3">
        <?php get_template_part('template-parts/section-heading', null, array(
          'eyebrow' => lumen_t('home.bring.eyebrow'),
          'title'   => lumen_t('bring.title'),
          'text'    => lumen_t('bring.text'),
          'align'   => 'left',
        )); ?>
        <div class="mt-8">
          <?php get_template_part('template-parts/documents', null, array('columns' => 'lg:grid-cols-2')); ?>
        </div>
      </div>
      <div class="rounded-2xl bg-navy-950 p-8 text-white lg:col-span-2">
        <?php lumen_icon('shield', 'h-10 w-10 text-brand-200'); ?>
        <h2 class="mt-5 text-2xl font-bold text-white"><?php lumen_e('security.title'); ?></h2>
        <p class="mt-4 text-slate-300"><?php lumen_e('security.text'); ?></p>
      </div>
    </div>
  </section>

  <?php get_template_part('template-parts/cta-band'); ?>
</main>

<?php get_footer();
