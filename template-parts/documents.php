<?php
// Documentos para la cita. Args: columns (columnas de la cuadrícula), carousel (true: carrusel con fotos, ver src/lib/carousel.js).
$icons = array('id-card', 'file-text', 'file-dollar', 'folder');
$photos = array('doc-photo-id', 'doc-taxpayer-id', 'doc-income-forms', 'doc-records');

if (!empty($args['carousel'])) { ?>
  <div class="relative" role="region" aria-roledescription="carousel" aria-label="<?php echo esc_attr(lumen_t('bring.title')); ?>" data-carousel<?php echo lumen_reveal('up'); ?>>
    <ul class="-mx-2 flex snap-x snap-mandatory overflow-x-auto pt-2 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" data-carousel-track>
      <?php foreach ($icons as $index => $icon) {
        $item = $index + 1; ?>
        <li class="w-full shrink-0 snap-start px-2 sm:w-1/2" aria-roledescription="slide" aria-label="<?php echo esc_attr(sprintf(lumen_t('carousel.slide'), $item, count($icons))); ?>" data-carousel-slide>
          <article class="group card-lift flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm">
            <?php get_template_part('template-parts/photo', null, array('key' => $photos[$index], 'class' => 'aspect-[16/10] transition-transform duration-700 ease-out-soft group-hover:scale-105', 'reveal' => false)); ?>
            <div class="relative flex flex-1 flex-col items-center bg-white px-5 pb-6 text-center">
              <div class="relative -mt-7 flex h-14 w-14 items-center justify-center rounded-full text-lumen icon-chip"><?php lumen_icon($icon); ?></div>
              <h3 class="mt-4 text-base font-bold"><?php lumen_e("bring.item$item.title"); ?></h3>
              <p class="mt-1 text-sm text-ink/70"><?php lumen_e("bring.item$item.text"); ?></p>
            </div>
          </article>
        </li>
      <?php } ?>
    </ul>

    <div class="mt-4 flex items-center justify-between gap-4">
      <div class="flex items-center gap-2">
        <?php foreach ($icons as $index => $icon) { ?>
          <button type="button" class="h-2.5 w-2.5 rounded-full bg-ink/20 transition-all duration-300 hover:bg-capa aria-current:w-7 aria-current:bg-cianotipo" aria-label="<?php echo esc_attr(sprintf(lumen_t('carousel.goto'), $index + 1)); ?>" aria-current="<?php echo $index ? 'false' : 'true'; ?>" data-carousel-dot></button>
        <?php } ?>
      </div>
      <div class="flex gap-2">
        <button type="button" class="btn-light flex h-11 w-11 items-center justify-center rounded-full hover:scale-110" aria-label="<?php echo esc_attr(lumen_t('carousel.prev')); ?>" data-carousel-prev><?php lumen_icon('arrow-right', 'h-5 w-5 rotate-180'); ?></button>
        <button type="button" class="btn-light flex h-11 w-11 items-center justify-center rounded-full hover:scale-110" aria-label="<?php echo esc_attr(lumen_t('carousel.next')); ?>" data-carousel-next><?php lumen_icon('arrow-right', 'h-5 w-5'); ?></button>
      </div>
    </div>
  </div>
  <?php return;
} ?>
<ul class="grid gap-4 sm:grid-cols-2 <?php echo esc_attr($args['columns'] ?? 'lg:grid-cols-4'); ?>">
  <?php foreach ($icons as $index => $icon) {
    $item = $index + 1; ?>
    <li class="group card-lift rounded-xl border border-ink/10 bg-white p-5 text-center shadow-sm"<?php echo lumen_reveal('zoom', $index); ?>>
      <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full text-lumen icon-chip"><?php lumen_icon($icon); ?></div>
      <h3 class="mt-4 text-sm font-bold"><?php lumen_e("bring.item$item.title"); ?></h3>
      <p class="mt-1 text-xs text-ink/70"><?php lumen_e("bring.item$item.text"); ?></p>
    </li>
  <?php } ?>
</ul>
