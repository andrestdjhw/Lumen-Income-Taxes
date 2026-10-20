<section class="py-16 lg:py-24">
  <div class="container-site grid items-center gap-10 lg:grid-cols-5">
    <div class="lg:col-span-3">
      <?php get_template_part('template-parts/section-heading', null, array(
        'eyebrow' => lumen_t('home.bring.eyebrow'),
        'title'   => lumen_t('bring.title'),
        'text'    => lumen_t('bring.text'),
        'align'   => 'left',
      )); ?>
      <div class="mt-8">
        <?php get_template_part('template-parts/documents'); ?>
      </div>
      <?php if (lumen_page_url('individual')) { ?>
        <a href="<?php echo esc_url(lumen_page_url('individual') . '#what-to-bring'); ?>" class="link-arrow mt-6"><?php lumen_e('home.bring.link'); ?><?php lumen_icon('arrow-right', 'h-4 w-4'); ?></a>
      <?php } ?>
    </div>
    <?php get_template_part('template-parts/placeholder', null, array('label' => 'Foto pendiente: revisión de documentos en la oficina', 'class' => 'aspect-[4/3] rounded-2xl lg:col-span-2 lg:aspect-[4/5]')); ?>
  </div>
</section>
