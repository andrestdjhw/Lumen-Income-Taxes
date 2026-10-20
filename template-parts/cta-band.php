<?php
// Banda final de conversión. Args opcionales: title, text, button, url (si no hay, el botón abre la agenda).
$button = $args['button'] ?? lumen_t('home.cta.button');
?>
<section class="overflow-hidden bg-navy-950 py-16 text-white lg:py-20">
  <div class="container-site grid items-center gap-10 lg:grid-cols-3">
    <div class="lg:col-span-2">
      <?php get_template_part('template-parts/section-heading', null, array(
        'eyebrow' => lumen_t('home.cta.eyebrow'),
        'title'   => $args['title'] ?? lumen_t('home.cta.title'),
        'text'    => $args['text'] ?? lumen_t('home.cta.text'),
        'align'   => 'left',
        'dark'    => true,
      )); ?>
      <div class="mt-8 flex flex-wrap gap-3">
        <?php if (!empty($args['url'])) { ?>
          <a href="<?php echo esc_url($args['url']); ?>" class="btn btn-primary"><?php echo esc_html($button); ?><?php lumen_icon('arrow-right', 'h-4 w-4'); ?></a>
        <?php } else {
          lumen_book_button($button);
        }
        lumen_call_button('btn-light'); ?>
      </div>
    </div>
    <div class="hidden justify-center lg:flex">
      <?php get_template_part('template-parts/logo', null, array('size' => 'lg')); ?>
    </div>
  </div>
</section>
