<?php
// Solo se muestra cuando hay reseñas verificadas en lumen_reviews() (inc/site-data.php). Nunca inventar puntuaciones.
$reviews = lumen_reviews();
if (!$reviews) {
  return;
}
$google_url = lumen_site()['google_reviews_url'];
?>
<section class="bg-slate-50 py-16 lg:py-24">
  <div class="container-site">
    <div class="flex flex-wrap items-end justify-between gap-6">
      <?php get_template_part('template-parts/section-heading', null, array(
        'eyebrow' => lumen_t('home.reviews.eyebrow'),
        'title'   => lumen_t('home.reviews.title'),
        'text'    => lumen_t('home.reviews.text'),
        'align'   => 'left',
      )); ?>
      <?php if ($google_url) { ?>
        <a href="<?php echo esc_url($google_url); ?>" class="btn btn-outline" target="_blank" rel="noopener"><?php lumen_e('home.reviews.link'); ?><?php lumen_icon('arrow-right', 'h-4 w-4'); ?></a>
      <?php } ?>
    </div>
    <div class="mt-10 grid gap-6 md:grid-cols-3">
      <?php foreach ($reviews as $review) { ?>
        <figure class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div class="flex gap-1 text-amber-400" aria-label="<?php echo esc_attr($review['rating'] . '/5'); ?>">
            <?php for ($i = 0; $i < (int) $review['rating']; $i++) {
              lumen_icon('star', 'h-4 w-4 fill-current');
            } ?>
          </div>
          <blockquote class="mt-4 text-sm text-slate-700">“<?php echo esc_html($review['text']); ?>”</blockquote>
          <figcaption class="mt-4 text-sm">
            <span class="font-semibold text-navy-950"><?php echo esc_html($review['name']); ?></span>
            <span class="block text-xs text-slate-500"><?php echo esc_html($review['source']); ?></span>
          </figcaption>
        </figure>
      <?php } ?>
    </div>
  </div>
</section>
