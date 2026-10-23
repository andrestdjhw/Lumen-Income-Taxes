<?php

// Páginas genéricas (Privacy Policy, Terms & Conditions, etc.) editadas desde el administrador de WordPress.
get_header(); ?>

<main id="main">
  <?php while (have_posts()) {
    the_post(); ?>
    <section class="bg-linear-to-b from-paper to-white">
      <div class="container-site py-14 lg:py-20">
        <div class="max-w-3xl">
          <p class="eyebrow"<?php echo lumen_reveal('up'); ?>><?php lumen_e('footer.legal'); ?></p>
          <h1 class="mt-4 text-4xl leading-tight font-bold sm:text-5xl"<?php echo lumen_reveal('up', 1); ?>><?php the_title(); ?></h1>
        </div>
      </div>
    </section>
    <div class="container-site pb-16 lg:pb-24">
      <div class="prose max-w-3xl prose-headings:text-lumen prose-h2:mt-10 prose-h2:text-2xl prose-a:text-cianotipo prose-strong:text-ink"><?php the_content(); ?></div>
    </div>
  <?php } ?>
</main>

<?php get_footer();
