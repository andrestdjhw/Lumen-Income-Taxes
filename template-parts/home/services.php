<?php
$photos = array(
  'individual'     => 'Foto pendiente: cliente individual',
  'self_employed'  => 'Foto pendiente: trabajador independiente',
  'small_business' => 'Foto pendiente: dueños de negocio',
);
?>
<section id="services" class="py-16 lg:py-24">
  <div class="container-site">
    <?php get_template_part('template-parts/section-heading', null, array(
      'eyebrow' => lumen_t('home.services.eyebrow'),
      'title'   => lumen_t('home.services.title'),
      'text'    => lumen_t('home.services.text'),
    )); ?>

    <div class="mt-12 grid gap-6 md:grid-cols-3">
      <?php foreach (lumen_services() as $service) {
        $key = $service['key']; ?>
        <article class="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
          <?php get_template_part('template-parts/placeholder', null, array('label' => $photos[$key], 'class' => 'aspect-[16/10]')); ?>
          <div class="flex flex-1 flex-col px-6 pb-6">
            <div class="relative -mt-8 flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-600 shadow-sm"><?php lumen_icon($service['icon'], 'h-7 w-7'); ?></div>
            <h3 class="mt-4 text-lg font-bold"><?php lumen_e("service.$key.title"); ?></h3>
            <p class="mt-2 flex-1 text-sm text-slate-600"><?php lumen_e("service.$key.text"); ?></p>
            <a href="<?php echo esc_url($service['url']); ?>" class="link-arrow mt-5"><?php lumen_e("service.$key.link"); ?><?php lumen_icon('arrow-right', 'h-4 w-4'); ?></a>
          </div>
        </article>
      <?php } ?>
    </div>
  </div>
</section>
