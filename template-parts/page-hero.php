<?php
// Hero de páginas internas. Args: eyebrow, title, text, cta, cta_url (si no hay, el botón abre la agenda), photo (clave de la foto).
// Si la página tiene "Imagen destacada" en WordPress, se usa como fondo completo (mismo estilo que el hero del Home)
// y tiene prioridad sobre 'photo'. Así la imagen se puede cambiar desde el administrador.
$background = (is_page() && has_post_thumbnail()) ? get_post_thumbnail_id() : 0;
$photo = $background ? '' : ($args['photo'] ?? '');
?>
<?php if ($background) { ?>
<section class="relative isolate overflow-hidden">
  <div class="absolute inset-0 -z-20 overflow-hidden bg-paper lg:left-[30%]">
    <?php echo wp_get_attachment_image($background, 'full', false, array(
      'class'         => 'h-full w-full object-cover motion-safe:animate-ken-burns',
      'loading'       => 'eager',
      'fetchpriority' => 'high',
      'sizes'         => '(min-width: 1024px) 70vw, 100vw',
    )); ?>
  </div>
  <div class="absolute inset-0 -z-10 bg-paper/90 lg:bg-transparent lg:bg-linear-to-r lg:from-paper lg:from-30% lg:via-paper/75 lg:via-45% lg:to-paper/0 lg:to-65%"></div>
  <div class="container-site py-16 lg:py-28">
    <div class="max-w-2xl">
<?php } else { ?>
<section class="bg-linear-to-b from-paper to-white">
  <div class="container-site grid items-center gap-10 py-14 lg:py-20 <?php echo $photo ? 'lg:grid-cols-2' : ''; ?>">
    <div class="<?php echo $photo ? '' : 'max-w-3xl'; ?>">
<?php } ?>
      <?php if (!empty($args['eyebrow'])) { ?>
        <p class="eyebrow"<?php echo lumen_reveal('up'); ?>><?php echo esc_html($args['eyebrow']); ?></p>
      <?php } ?>
      <h1 class="mt-4 text-4xl leading-tight font-bold sm:text-5xl"<?php echo lumen_reveal('up', 1); ?>><?php echo lumen_format($args['title']); ?></h1>
      <?php if (!empty($args['text'])) { ?>
        <p class="mt-6 max-w-2xl text-lg text-ink/80"<?php echo lumen_reveal('up', 2); ?>><?php echo lumen_format($args['text']); ?></p>
      <?php } ?>
      <div class="mt-8 flex flex-wrap gap-3"<?php echo lumen_reveal('up', 3); ?>>
        <?php if (!empty($args['cta_url'])) { ?>
          <a href="<?php echo esc_url($args['cta_url']); ?>" class="btn btn-primary"><?php echo esc_html($args['cta']); ?><?php lumen_icon('arrow-right', 'h-4 w-4'); ?></a>
        <?php } else {
          lumen_book_button($args['cta'] ?? null);
        }
        lumen_call_button(); ?>
      </div>
    </div>
    <?php if ($photo) {
      get_template_part('template-parts/photo', null, array('key' => $photo, 'class' => 'aspect-[4/3] rounded-2xl', 'priority' => true));
    } ?>
  </div>
</section>
