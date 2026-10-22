<?php
// Contenido compartido de las páginas Self-Employed y Small Business. Arg: page ('self_employed' | 'small_business').
// Textos en inc/copy/business-pages.php; preguntas frecuentes en inc/copy/page-faqs.php.
$page = $args['page'];
$config = array(
  'self_employed'  => array('prefix' => 'self', 'icons' => array('laptop', 'file-text', 'car', 'wrench'), 'photo' => 'self-employed-records'),
  'small_business' => array('prefix' => 'small', 'icons' => array('store', 'receipt', 'briefcase', 'users'), 'photo' => 'business-records'),
);
$prefix = $config[$page]['prefix'];
$contact_url = lumen_page_url('contact');
$request_url = $contact_url ? add_query_arg('interest', 'business', $contact_url) . '#contact-form' : '';
?>
<main id="main">
  <?php get_template_part('template-parts/page-hero', null, array(
    'eyebrow' => lumen_t('nav.' . $page),
    'title'   => lumen_t("$prefix.hero.title"),
    'text'    => lumen_t("$prefix.hero.text"),
    'cta'     => lumen_t("$prefix.hero.cta"),
    'cta_url' => $request_url,
    'photo'   => $config[$page]['photo'],
  )); ?>

  <section class="py-16 lg:py-24">
    <div class="container-site">
      <?php get_template_part('template-parts/section-heading', null, array(
        'eyebrow' => lumen_t('biz.audience.eyebrow'),
        'title'   => lumen_t("$prefix.audience.title"),
        'text'    => lumen_t("$prefix.audience.text"),
      )); ?>
      <ul class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <?php foreach ($config[$page]['icons'] as $index => $icon) {
          $item = $index + 1; ?>
          <li class="group card-lift rounded-2xl border border-ink/10 bg-white p-6 text-center shadow-sm"<?php echo lumen_reveal('up', $index); ?>>
            <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full text-lumen icon-chip"><?php lumen_icon($icon, 'h-7 w-7'); ?></div>
            <h3 class="mt-4 text-lg font-bold"><?php lumen_e("$prefix.audience.$item"); ?></h3>
            <p class="mt-1 text-sm text-ink/70"><?php lumen_e("$prefix.audience.{$item}_text"); ?></p>
          </li>
        <?php } ?>
      </ul>
    </div>
  </section>

  <section class="bg-paper py-16 lg:py-24">
    <div class="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <?php get_template_part('template-parts/photo', null, array('key' => $config[$page]['photo'], 'class' => 'aspect-[4/3] rounded-2xl')); ?>
      <div>
        <?php get_template_part('template-parts/section-heading', null, array(
          'eyebrow' => lumen_t('biz.records.eyebrow'),
          'title'   => lumen_t("$prefix.records.title"),
          'text'    => lumen_t("$prefix.records.text"),
          'align'   => 'left',
        )); ?>
        <ul class="mt-8 grid gap-3 sm:grid-cols-2">
          <?php for ($item = 1; $item <= 6; $item++) { ?>
            <li class="flex items-start gap-3 rounded-xl bg-white p-4 text-sm text-ink/80 shadow-sm"<?php echo lumen_reveal('up', $item); ?>>
              <?php lumen_icon('check-circle', 'mt-0.5 h-5 w-5 text-lumen'); ?>
              <span><?php lumen_e("$prefix.records.$item"); ?></span>
            </li>
          <?php } ?>
        </ul>
        <p class="mt-5 text-xs text-ink/65"><?php lumen_e('biz.records.note'); ?></p>
      </div>
    </div>
  </section>

  <section class="py-16 lg:py-24">
    <div class="container-site">
      <?php get_template_part('template-parts/section-heading', null, array(
        'eyebrow' => lumen_t('biz.steps.eyebrow'),
        'title'   => lumen_t('biz.steps.title'),
      )); ?>
      <div class="mt-16">
        <?php get_template_part('template-parts/process-steps'); ?>
      </div>
      <div class="mx-auto mt-14 flex max-w-3xl gap-4 rounded-xl border border-capa/50 bg-white p-5 text-sm text-ink/70"<?php echo lumen_reveal('up'); ?>>
        <?php lumen_icon('shield', 'h-6 w-6 text-lumen'); ?>
        <p><?php lumen_e('security.text'); ?></p>
      </div>
    </div>
  </section>

  <?php get_template_part('template-parts/page-faq', null, array('page' => $page)); ?>

  <?php lumen_cta_band(array(
    'title'  => lumen_t("$prefix.cta.title"),
    'button' => lumen_t('biz.cta.button'),
    'url'    => $request_url,
  )); ?>
</main>
