<section class="bg-brand-50 py-16 lg:py-24">
  <div class="container-site">
    <?php get_template_part('template-parts/section-heading', null, array(
      'eyebrow' => lumen_t('home.process.eyebrow'),
      'title'   => lumen_t('home.process.title'),
      'text'    => lumen_t('home.process.text'),
    )); ?>
    <div class="mt-16">
      <?php get_template_part('template-parts/process-steps'); ?>
    </div>
    <?php if (lumen_page_url('process')) { ?>
      <div class="mt-12 text-center">
        <a href="<?php echo esc_url(lumen_page_url('process')); ?>" class="link-arrow"><?php lumen_e('home.process.link'); ?><?php lumen_icon('arrow-right', 'h-4 w-4'); ?></a>
      </div>
    <?php } ?>
  </div>
</section>
