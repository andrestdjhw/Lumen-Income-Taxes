<?php

get_header(); ?>

<main id="main" class="bg-linear-to-b from-paper to-white">
  <div class="container-site max-w-3xl py-20 text-center lg:py-28">
    <p class="text-7xl font-bold text-capa">404</p>
    <h1 class="mt-4 text-4xl font-bold"><?php lumen_e('notfound.title'); ?></h1>
    <p class="mt-4 text-lg text-ink/70"><?php lumen_e('notfound.text'); ?></p>
    <ul class="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
      <?php foreach (lumen_nav_links() as $item) {
        if ($item['url']) { ?>
          <li><a href="<?php echo esc_url($item['url']); ?>" class="font-semibold text-cianotipo hover:text-lumen"><?php echo esc_html($item['label']); ?></a></li>
        <?php }
      } ?>
    </ul>
    <a href="<?php echo esc_url(lumen_page_url('home')); ?>" class="btn btn-primary mt-10"><?php lumen_e('notfound.button'); ?></a>
  </div>
</main>

<?php get_footer();
