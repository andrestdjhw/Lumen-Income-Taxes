<?php
// Preguntas frecuentes de una subpágina, antes de la banda CTA final. Arg: page (individual | self_employed | small_business | process | about | contact).
// Textos en inc/copy/page-faqs.php. Mismo diseño que la sección de FAQs del Home.
$page = $args['page'];
?>
<section class="bg-linear-to-b from-white via-paper to-white py-16 lg:py-24">
  <div class="container-site grid gap-10 lg:grid-cols-3">
    <div>
      <?php get_template_part('template-parts/section-heading', null, array(
        'eyebrow' => lumen_t('pagefaq.eyebrow'),
        'title'   => lumen_t("pagefaq.$page.title"),
        'text'    => lumen_t("pagefaq.$page.text"),
        'align'   => 'left',
      )); ?>
      <?php if (lumen_page_url('faq')) { ?>
        <a href="<?php echo esc_url(lumen_page_url('faq')); ?>" class="btn btn-primary mt-8"<?php echo lumen_reveal('up', 3); ?>><?php lumen_e('pagefaq.link'); ?><?php lumen_icon('arrow-right', 'h-4 w-4'); ?></a>
      <?php } ?>
    </div>
    <div class="lg:col-span-2">
      <?php get_template_part('template-parts/faq-list', null, array('key' => "pagefaq.$page.items")); ?>
    </div>
  </div>
</section>
