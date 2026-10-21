<?php

get_header(); ?>

<main id="main">
  <?php
  ?>
  <!-- Hero + cinta azul ocupan toda la pantalla visible bajo el navbar (--nav-h lo mide src/index.js). -->
  <div class="hero-screen flex flex-col">
    <?php
    get_template_part('template-parts/home/hero');
    get_template_part('template-parts/home/values');
    ?>
  </div>
  <?php
  get_template_part('template-parts/home/services');
  get_template_part('template-parts/home/process');
  get_template_part('template-parts/home/bring');
  get_template_part('template-parts/home/bilingual');
  get_template_part('template-parts/home/about');
  get_template_part('template-parts/home/reviews');
  get_template_part('template-parts/home/faq');
  get_template_part('template-parts/contact');
  ?>
</main>

<?php get_footer();
