<section id="services" class="py-16 lg:py-24">
  <div class="container-site">
    <?php get_template_part('template-parts/section-heading', null, array(
      'eyebrow' => lumen_t('home.services.eyebrow'),
      'title'   => lumen_t('home.services.title'),
      'text'    => lumen_t('home.services.text'),
    )); ?>

    <div class="mt-12 grid gap-6 md:grid-cols-3">
      <?php foreach (lumen_services() as $index => $service) {
        $key = $service['key']; ?>
        <!-- Tarjeta clickeable completa: el enlace "Explore…" se estira sobre toda la tarjeta (after:absolute inset-0). -->
        <article class="card-lift group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-cianotipo has-[a:focus-visible]:ring-offset-2"<?php echo lumen_reveal('up', $index); ?>>
          <div class="overflow-hidden">
            <?php get_template_part('template-parts/photo', null, array('key' => 'service-' . str_replace('_', '-', $key), 'class' => 'aspect-[16/10] transition-transform duration-700 ease-out-soft group-hover:scale-105', 'reveal' => false)); ?>
          </div>
          <div class="flex flex-1 flex-col bg-white px-6 pb-6">
            <div class="relative -mt-8 flex h-16 w-16 items-center justify-center rounded-full text-lumen icon-chip"><?php lumen_icon($service['icon'], 'h-7 w-7'); ?></div>
            <h3 class="mt-4 text-lg font-bold transition-colors group-hover:text-cianotipo"><?php lumen_e("service.$key.title"); ?></h3>
            <p class="mt-2 flex-1 text-sm text-ink/70"><?php lumen_e("service.$key.text"); ?></p>
            <a href="<?php echo esc_url($service['url']); ?>" class="link-arrow mt-5 after:absolute after:inset-0 after:z-10 focus-visible:outline-none group-hover:[&>svg]:translate-x-1"><?php lumen_e("service.$key.link"); ?><?php lumen_icon('arrow-right', 'h-4 w-4'); ?></a>
          </div>
        </article>
      <?php } ?>
    </div>
  </div>
</section>
