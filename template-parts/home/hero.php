<section class="overflow-hidden bg-linear-to-r from-white via-white to-brand-50">
  <div class="container-site grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-20">
    <div>
      <p class="eyebrow"><?php lumen_e('home.hero.eyebrow'); ?></p>
      <h1 class="mt-4 text-4xl leading-tight font-bold sm:text-5xl lg:text-[3.4rem]"><?php lumen_e('home.hero.title'); ?></h1>
      <p class="mt-6 max-w-xl text-lg text-slate-600"><?php lumen_e('home.hero.text'); ?></p>
      <div class="mt-8 flex flex-wrap gap-3">
        <?php lumen_book_button(); ?>
        <?php lumen_call_button(); ?>
      </div>
      <ul class="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-navy-900">
        <?php foreach (array('badge1', 'badge2', 'badge3') as $badge) { ?>
          <li class="flex items-center gap-2"><?php lumen_icon('check', 'h-4 w-4 text-brand-600'); ?><?php lumen_e("home.hero.$badge"); ?></li>
        <?php } ?>
      </ul>
    </div>

    <div class="relative">
      <?php get_template_part('template-parts/placeholder', null, array('label' => 'Foto pendiente: Yolanda en la oficina', 'class' => 'aspect-[4/3] rounded-2xl lg:aspect-[5/4]')); ?>
      <div class="relative mt-4 rounded-xl border border-slate-200 bg-white p-5 shadow-lg lg:absolute lg:top-6 lg:right-6 lg:mt-0 lg:w-64">
        <p class="text-sm font-bold text-navy-950"><?php lumen_e('home.hero.card_title'); ?></p>
        <ul class="mt-4 space-y-3">
          <?php foreach (lumen_services() as $service) { ?>
            <li>
              <a href="<?php echo esc_url($service['url']); ?>" class="flex items-center gap-3 text-sm text-slate-700 hover:text-brand-600">
                <?php lumen_icon($service['icon'], 'h-5 w-5 text-brand-600'); ?>
                <?php lumen_e('nav.' . $service['key']); ?>
              </a>
            </li>
          <?php } ?>
        </ul>
        <a href="#services" class="link-arrow mt-4"><?php lumen_e('home.hero.card_link'); ?><?php lumen_icon('arrow-right', 'h-4 w-4'); ?></a>
      </div>
    </div>
  </div>
</section>
