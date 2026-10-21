<?php
/*
 * Template Name: About
 */

// No inventar biografía, cargos, titulaciones ni años de experiencia fiscal (brief, sección 07).
$values = array('honesty' => 'scale', 'clarity' => 'search', 'respect' => 'users', 'empathy' => 'heart');

get_header(); ?>

<main id="main">
  <?php get_template_part('template-parts/page-hero', null, array(
    'eyebrow' => lumen_t('nav.about'),
    'title'   => lumen_t('about.hero.title'),
    'text'    => lumen_t('about.hero.text'),
    'photo'   => 'about-hero',
  )); ?>

  <section class="py-16 lg:py-24">
    <div class="container-site grid items-center gap-10 lg:grid-cols-2">
      <?php get_template_part('template-parts/photo', null, array('key' => 'yolanda-portrait', 'class' => 'aspect-[4/5] rounded-2xl lg:order-2')); ?>
      <div>
        <?php get_template_part('template-parts/section-heading', null, array(
          'title' => lumen_t('about.founder.title'),
          'text'  => lumen_t('about.founder.text'),
          'align' => 'left',
        )); ?>
        <div class="mt-10 border-t border-ink/10 pt-10"<?php echo lumen_reveal('up', 3); ?>>
          <h2 class="text-2xl font-bold"><?php lumen_e('about.approach.title'); ?></h2>
          <p class="mt-4 text-ink/70"><?php lumen_e('about.approach.text'); ?></p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-paper py-16 lg:py-24">
    <div class="container-site">
      <?php get_template_part('template-parts/section-heading', null, array(
        'eyebrow' => lumen_t('about.values.eyebrow'),
        'title'   => lumen_t('about.values.title'),
      )); ?>
      <ul class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <?php foreach (array_keys($values) as $index => $value) {
          $icon = $values[$value]; ?>
          <li class="group card-lift rounded-2xl border border-ink/10 bg-white p-6 text-center shadow-sm"<?php echo lumen_reveal('zoom', $index); ?>>
            <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full text-lumen icon-chip"><?php lumen_icon($icon, 'h-7 w-7'); ?></div>
            <h3 class="mt-4 text-lg font-bold"><?php lumen_e("about.values.$value"); ?></h3>
          </li>
        <?php } ?>
      </ul>
    </div>
  </section>

  <?php lumen_cta_band(array(
    'button' => lumen_t('about.cta.button'),
  )); ?>
</main>

<?php get_footer();
