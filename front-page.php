<?php

get_header(); ?>

<main id="main">
  <?php
  get_template_part('template-parts/home/hero');
  get_template_part('template-parts/home/values');
  get_template_part('template-parts/home/services');
  get_template_part('template-parts/home/process');
  get_template_part('template-parts/home/bring');
  get_template_part('template-parts/home/bilingual');
  get_template_part('template-parts/home/about');
  get_template_part('template-parts/home/reviews');
  get_template_part('template-parts/home/faq');
  get_template_part('template-parts/cta-band');
  get_template_part('template-parts/contact');
  ?>
</main>

<?php get_footer();
