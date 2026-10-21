<?php $features = array(1 => 'message', 2 => 'heart', 3 => 'star'); ?>
<section class="py-16 lg:py-24">
  <div class="container-site grid items-center gap-10 lg:grid-cols-12">
    <?php get_template_part('template-parts/photo', null, array('key' => 'yolanda-portrait', 'class' => 'aspect-[4/5] rounded-2xl lg:col-span-4')); ?>

    <div class="lg:col-span-5">
      <?php get_template_part('template-parts/section-heading', null, array(
        'eyebrow' => lumen_t('home.about.eyebrow'),
        'title'   => lumen_t('about.hero.title'),
        'text'    => lumen_t('about.hero.text'),
        'align'   => 'left',
      )); ?>
      <?php if (lumen_page_url('about')) { ?>
        <a href="<?php echo esc_url(lumen_page_url('about')); ?>" class="btn btn-primary mt-8"<?php echo lumen_reveal('up', 3); ?>><?php lumen_e('home.about.cta'); ?><?php lumen_icon('arrow-right', 'h-4 w-4'); ?></a>
      <?php } ?>
    </div>

    <ul class="space-y-6 lg:col-span-3">
      <?php foreach ($features as $item => $icon) { ?>
        <li class="flex gap-4"<?php echo lumen_reveal('right', $item); ?>>
          <?php lumen_icon($icon, 'h-6 w-6 text-lumen'); ?>
          <div>
            <h3 class="text-sm font-bold"><?php lumen_e("home.about.{$item}_title"); ?></h3>
            <p class="mt-1 text-sm text-ink/70"><?php lumen_e("home.about.{$item}_text"); ?></p>
          </div>
        </li>
      <?php } ?>
    </ul>
  </div>
</section>
