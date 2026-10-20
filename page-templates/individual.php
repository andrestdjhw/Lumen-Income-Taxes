<?php
/*
 * Template Name: Individual Taxes
 */

get_header(); ?>

<main id="main">
  <?php get_template_part('template-parts/page-hero', null, array(
    'eyebrow' => lumen_t('nav.individual'),
    'title'   => lumen_t('individual.hero.title'),
    'text'    => lumen_t('individual.hero.text'),
    'cta'     => lumen_t('individual.hero.cta'),
    'photo'   => 'Foto pendiente: cita de impuestos personales',
  )); ?>

  <section class="py-16 lg:py-24">
    <div class="container-site">
      <?php get_template_part('template-parts/section-heading', null, array(
        'title' => lumen_t('individual.who.title'),
        'text'  => lumen_t('individual.who.text'),
      )); ?>
      <div class="mt-16">
        <?php get_template_part('template-parts/process-steps'); ?>
      </div>
    </div>
  </section>

  <section id="what-to-bring" class="bg-brand-50 py-16 lg:py-24">
    <div class="container-site">
      <?php get_template_part('template-parts/section-heading', null, array(
        'eyebrow' => lumen_t('home.bring.eyebrow'),
        'title'   => lumen_t('bring.title'),
        'text'    => lumen_t('bring.text'),
      )); ?>
      <div class="mt-12">
        <?php get_template_part('template-parts/documents'); ?>
      </div>
      <div class="mx-auto mt-10 flex max-w-3xl gap-4 rounded-xl border border-brand-200 bg-white p-5 text-sm text-slate-600">
        <?php lumen_icon('shield', 'h-6 w-6 text-brand-600'); ?>
        <p><?php lumen_e('security.text'); ?></p>
      </div>
    </div>
  </section>

  <?php get_template_part('template-parts/cta-band', null, array(
    'title'  => lumen_t('individual.cta.title'),
    'button' => lumen_t('individual.cta.button'),
  )); ?>
</main>

<?php get_footer();
