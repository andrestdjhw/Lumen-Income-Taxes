<section class="bg-linear-to-b from-white via-paper to-white py-16 lg:py-24">
  <div class="container-site grid gap-10 lg:grid-cols-3">
    <div>
      <?php get_template_part('template-parts/section-heading', null, array(
        'eyebrow' => lumen_t('home.faq.eyebrow'),
        'title'   => lumen_t('home.faq.title'),
        'text'    => lumen_t('home.faq.text'),
        'align'   => 'left',
      )); ?>
      <?php if (lumen_page_url('faq')) { ?>
        <a href="<?php echo esc_url(lumen_page_url('faq')); ?>" class="btn btn-primary mt-8"<?php echo lumen_reveal('up', 3); ?>><?php lumen_e('home.faq.link'); ?><?php lumen_icon('arrow-right', 'h-4 w-4'); ?></a>
      <?php } ?>
    </div>
    <div class="lg:col-span-2">
      <?php get_template_part('template-parts/faq-list'); ?>
    </div>
  </div>
</section>
