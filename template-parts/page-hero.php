<?php
// Hero de páginas internas. Args: eyebrow, title, text, cta, cta_url (si no hay, el botón abre la agenda), photo.
$photo = $args['photo'] ?? '';
?>
<section class="bg-linear-to-b from-brand-50 to-white">
  <div class="container-site grid items-center gap-10 py-14 lg:py-20 <?php echo $photo ? 'lg:grid-cols-2' : ''; ?>">
    <div class="<?php echo $photo ? '' : 'max-w-3xl'; ?>">
      <?php if (!empty($args['eyebrow'])) { ?>
        <p class="eyebrow"><?php echo esc_html($args['eyebrow']); ?></p>
      <?php } ?>
      <h1 class="mt-4 text-4xl leading-tight font-bold sm:text-5xl"><?php echo lumen_format($args['title']); ?></h1>
      <?php if (!empty($args['text'])) { ?>
        <p class="mt-6 max-w-2xl text-lg text-slate-600"><?php echo lumen_format($args['text']); ?></p>
      <?php } ?>
      <div class="mt-8 flex flex-wrap gap-3">
        <?php if (!empty($args['cta_url'])) { ?>
          <a href="<?php echo esc_url($args['cta_url']); ?>" class="btn btn-primary"><?php echo esc_html($args['cta']); ?><?php lumen_icon('arrow-right', 'h-4 w-4'); ?></a>
        <?php } else {
          lumen_book_button($args['cta'] ?? null);
        }
        lumen_call_button(); ?>
      </div>
    </div>
    <?php if ($photo) {
      get_template_part('template-parts/placeholder', null, array('label' => $photo, 'class' => 'aspect-[4/3] rounded-2xl'));
    } ?>
  </div>
</section>
