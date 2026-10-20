<?php $urls = lumen_lang_urls(); ?>
<section class="bg-navy-900 text-white">
  <div class="grid items-stretch lg:grid-cols-2">
    <?php get_template_part('template-parts/placeholder', null, array('label' => 'Foto pendiente: conversación con un cliente', 'class' => 'min-h-64 lg:min-h-96')); ?>
    <div class="flex items-center px-4 py-14 sm:px-10 lg:px-16">
      <div class="max-w-xl">
        <?php get_template_part('template-parts/section-heading', null, array(
          'eyebrow' => lumen_t('home.bilingual.eyebrow'),
          'title'   => lumen_t('home.bilingual.title'),
          'text'    => lumen_t('home.bilingual.text'),
          'align'   => 'left',
          'dark'    => true,
        )); ?>
        <div class="mt-8 flex flex-wrap gap-3">
          <a href="<?php echo esc_url($urls['en'] ?? '#'); ?>" class="btn btn-light" hreflang="en" lang="en" data-track="language_switch">Continue in English</a>
          <a href="<?php echo esc_url($urls['es'] ?? '#'); ?>" class="btn btn-primary" hreflang="es" lang="es" data-track="language_switch">Continuar en Español</a>
        </div>
      </div>
    </div>
  </div>
</section>
