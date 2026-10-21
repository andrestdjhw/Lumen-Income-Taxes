<?php
/*
 * Template Name: Business Tax Support
 */

// Solo servicios confirmados: bookkeeping, payroll, etc. quedan fuera hasta que la clienta los valide (brief, sección 05).
$contact_url = lumen_page_url('contact');
$request_url = $contact_url ? add_query_arg('interest', 'business', $contact_url) . '#contact-form' : '';
$paths = array(
  'self_employed'  => array('id' => 'self-employed', 'icon' => 'briefcase'),
  'small_business' => array('id' => 'small-business', 'icon' => 'store'),
);

get_header(); ?>

<main id="main">
  <?php get_template_part('template-parts/page-hero', null, array(
    'eyebrow' => lumen_t('nav.self_employed') . ' · ' . lumen_t('nav.small_business'),
    'title'   => lumen_t('business.hero.title'),
    'text'    => lumen_t('business.hero.text'),
    'cta'     => lumen_t('business.hero.cta'),
    'cta_url' => $request_url,
    'photo'   => 'business-hero',
  )); ?>

  <section class="py-16 lg:py-24">
    <div class="container-site">
      <?php get_template_part('template-parts/section-heading', null, array(
        'title' => lumen_t('business.audience.title'),
        'text'  => lumen_t('business.audience.text'),
      )); ?>
      <div class="mt-12 grid gap-6 md:grid-cols-2">
        <?php foreach (array_keys($paths) as $index => $key) {
          $path = $paths[$key]; ?>
          <article id="<?php echo esc_attr($path['id']); ?>" class="group card-lift flex flex-col rounded-2xl border border-ink/10 bg-white p-8 shadow-sm"<?php echo lumen_reveal('up', $index); ?>>
            <div class="flex h-14 w-14 items-center justify-center rounded-full text-lumen icon-chip"><?php lumen_icon($path['icon'], 'h-7 w-7'); ?></div>
            <h2 class="mt-5 text-2xl font-bold"><?php lumen_e("service.$key.title"); ?></h2>
            <p class="mt-3 flex-1 text-ink/70"><?php lumen_e("service.$key.text"); ?></p>
            <?php if ($request_url) { ?>
              <a href="<?php echo esc_url($request_url); ?>" class="link-arrow mt-6"><?php lumen_e('business.hero.cta'); ?><?php lumen_icon('arrow-right', 'h-4 w-4'); ?></a>
            <?php } ?>
          </article>
        <?php } ?>
      </div>
    </div>
  </section>

  <section class="bg-paper py-16 lg:py-24">
    <div class="container-site grid items-center gap-10 lg:grid-cols-2">
      <?php get_template_part('template-parts/photo', null, array('key' => 'business-records', 'class' => 'aspect-[4/3] rounded-2xl')); ?>
      <?php get_template_part('template-parts/section-heading', null, array(
        'title' => lumen_t('business.pain.title'),
        'text'  => lumen_t('business.pain.text'),
        'align' => 'left',
      )); ?>
    </div>
  </section>

  <?php lumen_cta_band(array(
    'title'  => lumen_t('business.cta.title'),
    'button' => lumen_t('business.cta.button'),
    'url'    => $request_url,
  )); ?>
</main>

<?php get_footer();
