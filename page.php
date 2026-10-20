<?php

// Páginas genéricas (políticas, avisos legales, etc.) editadas desde el administrador de WordPress.
get_header(); ?>

<main id="main">
  <?php while (have_posts()) {
    the_post(); ?>
    <section class="bg-brand-50">
      <div class="container-site py-14">
        <h1 class="text-4xl font-bold"><?php the_title(); ?></h1>
      </div>
    </section>
    <div class="container-site py-12">
      <div class="prose max-w-3xl"><?php the_content(); ?></div>
    </div>
  <?php } ?>
</main>

<?php get_footer();
