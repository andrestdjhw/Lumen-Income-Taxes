<?php
// Fondo del hero. Si existe assets/video/home-hero-*.mp4 se usa el video (src/lib/hero-video.js elige
// 1080p o 720p según la pantalla); el poster se ve mientras carga, sin JavaScript o con "reducir movimiento".
// Sin video se usa la foto: con una clave queda fija con zoom lento; con varias, slideshow con fundido
// (src/lib/slideshow.js). Ejemplo de slideshow: array('home-hero', 'about-hero', 'business-hero')
$video = file_exists(get_theme_file_path('/assets/video/home-hero-1080.mp4'));
$slides = $video ? array() : array_values(array_filter(array_map('lumen_photo', array('home-hero'))));
?>
<section class="hero-dark relative isolate flex flex-1 items-center overflow-hidden">
  <div class="absolute inset-0 -z-20 overflow-hidden bg-lumen" <?php echo count($slides) > 1 ? 'data-slideshow' : ''; ?>>
    <?php if ($video) { ?>
      <video
        class="absolute inset-0 h-full w-full object-cover"
        poster="<?php echo esc_url(get_theme_file_uri('/assets/video/home-hero-poster.jpg')); ?>"
        data-src-desktop="<?php echo esc_url(get_theme_file_uri('/assets/video/home-hero-1080.mp4')); ?>"
        data-src-mobile="<?php echo esc_url(get_theme_file_uri('/assets/video/home-hero-720.mp4')); ?>"
        muted loop playsinline preload="none" aria-hidden="true"
        data-hero-video
      ></video>
    <?php } ?>
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
  <!-- Overlay oscuro (Negro Tinta → Azul Lumen) para que los textos claros se lean sobre el video o la foto (ver .hero-dark). -->
  <div class="absolute inset-0 -z-10 bg-ink/75 lg:bg-transparent lg:bg-linear-to-r lg:from-ink/90 lg:from-25% lg:via-lumen/70 lg:via-55% lg:to-lumen/25"></div>

  <div class="container-site grid gap-10 py-12 lg:grid-cols-2 lg:py-16 short:gap-8 short:py-6">
    <div class="self-center">
      <p class="eyebrow"<?php echo lumen_reveal('up'); ?>><?php lumen_e('home.hero.eyebrow'); ?></p>
      <h1 class="mt-4 text-4xl leading-tight font-bold sm:text-5xl lg:text-[3.4rem] short:mt-3 short:text-[2.6rem] short:leading-[1.12]"<?php echo lumen_reveal('up', 1); ?>><?php lumen_e('home.hero.title'); ?></h1>
      <p class="mt-6 max-w-xl text-lg text-ink/80 short:mt-4 short:text-base"<?php echo lumen_reveal('up', 2); ?>><?php lumen_e('home.hero.text'); ?></p>
      <!-- En móvil (<640px) se ocultan: Llamar y Agendar ya están en la barra fija inferior. -->
      <div class="mt-8 hidden flex-wrap gap-3 sm:flex short:mt-5"<?php echo lumen_reveal('up', 3); ?>>
        <?php lumen_book_button(); ?>
        <?php lumen_call_button('btn-light'); ?>
      </div>
      <ul class="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-white short:mt-5"<?php echo lumen_reveal('up', 4); ?>>
        <?php foreach (array('badge1', 'badge2', 'badge3') as $badge) { ?>
          <li class="flex items-center gap-2"><?php lumen_icon('check', 'h-4 w-4 text-celeste'); ?><?php lumen_e("home.hero.$badge"); ?></li>
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
