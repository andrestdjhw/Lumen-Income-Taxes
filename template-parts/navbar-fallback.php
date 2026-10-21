<?php // Versión HTML del navbar: se ve antes de que cargue React y queda disponible para buscadores. ?>
<?php $site = lumen_site(); ?>
<div class="bg-linear-to-r from-ink to-lumen text-sm text-celeste">
  <div class="container-site flex h-10 items-center justify-between gap-4">
    <a href="<?php echo esc_attr('tel:' . $site['phone_e164']); ?>"><?php echo esc_html($site['phone']); ?></a>
    <a href="<?php echo esc_url($site['maps_url']); ?>" class="hidden lg:block" target="_blank" rel="noopener"><?php echo esc_html("{$site['street']}, {$site['city']}, {$site['region']} {$site['postal_code']}"); ?></a>
  </div>
</div>
<header class="border-b border-ink/5 bg-white">
  <div class="container-site flex h-20 items-center justify-between gap-6">
    <a href="<?php echo esc_url(lumen_page_url('home')); ?>" class="text-lumen"><?php get_template_part('template-parts/logo'); ?></a>
    <nav aria-label="<?php echo esc_attr(lumen_t('nav.main')); ?>" class="hidden lg:block">
      <ul class="flex items-center gap-5 text-sm font-medium whitespace-nowrap">
        <?php foreach (lumen_nav() as $item) { ?>
          <li>
            <?php if (!empty($item['children'])) { ?>
              <span><?php echo esc_html($item['label']); ?></span>
              <ul class="sr-only">
                <?php foreach ($item['children'] as $child) { ?>
                  <li><a href="<?php echo esc_url($child['url']); ?>"><?php echo esc_html($child['label']); ?></a></li>
                <?php } ?>
              </ul>
            <?php } else { ?>
              <a href="<?php echo esc_url($item['url']); ?>" class="hover:text-cianotipo"><?php echo esc_html($item['label']); ?></a>
            <?php } ?>
          </li>
        <?php } ?>
      </ul>
    </nav>
    <?php lumen_book_button(null, 'btn-primary hidden sm:inline-flex'); ?>
  </div>
</header>
