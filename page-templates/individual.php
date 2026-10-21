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
    'photo'   => 'individual-hero',
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

  <section id="what-to-bring" class="bg-paper py-16 lg:py-24">
    <div class="container-site">
      <?php get_template_part('template-parts/section-heading', null, array(
        'eyebrow' => lumen_t('home.bring.eyebrow'),
        'title'   => lumen_t('bring.title'),
        'text'    => lumen_t('bring.text'),
      )); ?>
      <div class="mt-12">
        <?php get_template_part('template-parts/documents'); ?>
      </div>
      <div<?php echo lumen_reveal('up'); ?> class="mx-auto mt-10 flex max-w-3xl gap-4 rounded-xl border border-capa/50 bg-white p-5 text-sm text-ink/70">
        <?php lumen_icon('shield', 'h-6 w-6 text-lumen'); ?>
        <p><?php lumen_e('security.text'); ?></p>
      </div>
    </div>
  </section>

  <?php lumen_cta_band(array(
    'title'  => lumen_t('individual.cta.title'),
    'button' => lumen_t('individual.cta.button'),
  )); ?>
</main>

<?php get_footer();
