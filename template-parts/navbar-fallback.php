<?php // Versión HTML del navbar: se ve antes de que cargue React y queda disponible para buscadores. ?>
<header class="border-b border-slate-100 bg-white">
  <div class="container-site flex h-20 items-center justify-between gap-6">
    <a href="<?php echo esc_url(lumen_page_url('home')); ?>" class="text-navy-950"><?php get_template_part('template-parts/logo'); ?></a>
    <nav aria-label="<?php echo esc_attr(lumen_t('nav.main')); ?>" class="hidden xl:block">
      <ul class="flex items-center gap-5 text-sm font-medium whitespace-nowrap">
        <?php foreach (lumen_nav() as $item) { ?>
          <li><a href="<?php echo esc_url($item['url']); ?>" class="hover:text-brand-600"><?php echo esc_html($item['label']); ?></a></li>
        <?php } ?>
      </ul>
    </nav>
    <?php lumen_book_button(null, 'btn-primary hidden sm:inline-flex'); ?>
  </div>
</header>
