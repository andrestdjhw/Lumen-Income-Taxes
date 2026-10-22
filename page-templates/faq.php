<?php
/*
 * Template Name: FAQs
 */

get_header(); ?>

<main id="main">
  <?php get_template_part('template-parts/page-hero', null, array(
    'eyebrow' => lumen_t('nav.faq'),
    'title'   => lumen_t('faq.hero.title'),
    'text'    => lumen_t('faq.hero.text'),
  )); ?>

  <section class="py-16 lg:py-24">
    <div class="container-site max-w-4xl space-y-14">
      <?php foreach (lumen_t('faq.groups') as $group) { ?>
        <div>
          <h2 class="text-2xl font-bold"<?php echo lumen_reveal('up'); ?>><?php echo esc_html($group['title']); ?></h2>
          <div class="mt-6">
            <?php get_template_part('template-parts/faq-list', null, array('items' => $group['items'])); ?>
          </div>
        </div>
      <?php } ?>
    </div>
  </section>
</main>

<?php get_footer();
