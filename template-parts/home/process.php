<!-- Mismo degradado de 3 azules que el panel de la sección bilingüe: Lumen → Cianotipo → Capa Media. -->
<section class="bg-linear-to-br from-lumen from-35% via-cianotipo via-75% to-capa py-16 text-white lg:py-24">
  <div class="container-site">
    <?php get_template_part('template-parts/section-heading', null, array(
      'eyebrow' => lumen_t('home.process.eyebrow'),
      'title'   => lumen_t('home.process.title'),
      'text'    => lumen_t('home.process.text'),
      'dark'    => true,
    )); ?>
    <div class="mt-16">
      <?php get_template_part('template-parts/process-steps', null, array('dark' => true)); ?>
    </div>
    <?php if (lumen_page_url('process')) { ?>
      <div class="mt-12 text-center">
        <a href="<?php echo esc_url(lumen_page_url('process')); ?>" class="link-arrow text-white hover:text-celeste"><?php lumen_e('home.process.link'); ?><?php lumen_icon('arrow-right', 'h-4 w-4'); ?></a>
      </div>
    <?php } ?>
  </div>
</section>
