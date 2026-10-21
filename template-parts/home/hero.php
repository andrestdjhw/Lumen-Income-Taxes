<?php
// Imagen de fondo del hero. Con una sola clave queda fija con un zoom lento; con varias se convierte
// en un slideshow con fundido (src/lib/slideshow.js). El brief recomienda un hero sin slider.
// Ejemplo de slideshow: array('home-hero', 'about-hero', 'business-hero')
$slides = array_values(array_filter(array_map('lumen_photo', array('home-hero'))));
?>
<section class="relative isolate flex flex-1 items-center overflow-hidden">
  <div class="absolute inset-0 -z-20 overflow-hidden bg-paper lg:left-[30%]" <?php echo count($slides) > 1 ? 'data-slideshow' : ''; ?>>
    <?php foreach ($slides as $index => $slide) { ?>
      <img
        src="<?php echo esc_url($slide['url']); ?>"
        alt="<?php echo $index ? '' : esc_attr($slide['alt']); ?>"
        width="<?php echo $slide['width']; ?>"
        height="<?php echo $slide['height']; ?>"
        class="absolute inset-0 h-full w-full object-cover object-[60%_center] transition-opacity duration-1500 motion-safe:animate-ken-burns <?php echo $index ? 'opacity-0' : ''; ?>"
        loading="<?php echo $index ? 'lazy' : 'eager'; ?>"
        <?php echo $index ? '' : 'fetchpriority="high"'; ?>
        decoding="async"
        data-slide
      >
    <?php } ?>
  </div>
  <!-- Velo Blanco Papel (mismo tono que el hero de las subpáginas) para que el texto se lea sobre la foto y se distinga del navbar blanco. -->
  <div class="absolute inset-0 -z-10 bg-paper/90 lg:bg-transparent lg:bg-linear-to-r lg:from-paper lg:from-30% lg:via-paper/75 lg:via-45% lg:to-paper/0 lg:to-65%"></div>

  <div class="container-site grid gap-10 py-12 lg:grid-cols-2 lg:py-16 short:gap-8 short:py-6">
    <div class="self-center">
      <p class="eyebrow"<?php echo lumen_reveal('up'); ?>><?php lumen_e('home.hero.eyebrow'); ?></p>
      <h1 class="mt-4 text-4xl leading-tight font-bold sm:text-5xl lg:text-[3.4rem] short:mt-3 short:text-[2.6rem] short:leading-[1.12]"<?php echo lumen_reveal('up', 1); ?>><?php lumen_e('home.hero.title'); ?></h1>
      <p class="mt-6 max-w-xl text-lg text-ink/80 short:mt-4 short:text-base"<?php echo lumen_reveal('up', 2); ?>><?php lumen_e('home.hero.text'); ?></p>
      <div class="mt-8 flex flex-wrap gap-3 short:mt-5"<?php echo lumen_reveal('up', 3); ?>>
        <?php lumen_book_button(); ?>
        <?php lumen_call_button(); ?>
      </div>
      <ul class="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-lumen short:mt-5"<?php echo lumen_reveal('up', 4); ?>>
        <?php foreach (array('badge1', 'badge2', 'badge3') as $badge) { ?>
          <li class="flex items-center gap-2"><?php lumen_icon('check', 'h-4 w-4 text-cianotipo'); ?><?php lumen_e("home.hero.$badge"); ?></li>
        <?php } ?>
      </ul>
    </div>

    <div class="flex items-center lg:justify-end">
      <div id="hero-form" class="w-full sm:max-w-md"<?php echo lumen_reveal('zoom', 4); ?>>
        <!-- El efecto flotante se detiene mientras la persona escribe (focus-within). -->
        <div class="rounded-2xl border border-ink/10 bg-white/95 p-6 shadow-2xl shadow-lumen/15 backdrop-blur motion-safe:animate-float motion-safe:focus-within:animate-none sm:p-7 short:p-5">
          <h2 class="text-xl font-bold"><?php lumen_e('form.quick_title'); ?></h2>
          <p class="mt-1 text-sm text-ink/70 short:hidden"><?php lumen_e('form.quick_text'); ?></p>
          <div class="mt-5 short:mt-4" data-component="contact-form" data-variant="compact" data-source="hero">
            <noscript><p class="text-sm text-ink/70"><?php lumen_e('contact.no_js'); ?></p></noscript>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
