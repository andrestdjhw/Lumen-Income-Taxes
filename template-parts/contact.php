<?php
// Datos de contacto + mapa + formulario (React). Args: show_heading (bool), interest (valor preseleccionado).
$site = lumen_site();
$show_heading = $args['show_heading'] ?? true;
?>
<section id="contact" class="bg-white py-16 lg:py-24">
  <div class="container-site grid gap-8 lg:grid-cols-12">
    <div class="lg:col-span-3">
      <?php if ($show_heading) { ?>
        <p class="eyebrow"><?php lumen_e('contact.eyebrow'); ?></p>
        <h2 class="mt-3 text-3xl font-bold"><?php lumen_e('contact.title'); ?></h2>
        <p class="mt-4 text-slate-600"><?php lumen_e('contact.intro'); ?></p>
      <?php } ?>
      <ul class="<?php echo $show_heading ? 'mt-8' : ''; ?> space-y-6 text-sm">
        <li class="flex gap-3">
          <span class="text-brand-600"><?php lumen_icon('phone', 'h-5 w-5'); ?></span>
          <a href="<?php echo esc_attr('tel:' . $site['phone_e164']); ?>" class="font-semibold text-navy-950 hover:text-brand-600" data-track="click_call"><?php echo esc_html($site['phone']); ?></a>
        </li>
        <li class="flex gap-3">
          <span class="text-brand-600"><?php lumen_icon('map-pin', 'h-5 w-5'); ?></span>
          <div>
            <address class="font-semibold text-navy-950 not-italic"><?php echo esc_html($site['street']); ?><br><?php echo esc_html("{$site['city']}, {$site['region']} {$site['postal_code']}"); ?></address>
            <a href="<?php echo esc_url($site['directions_url']); ?>" class="link-arrow mt-1" target="_blank" rel="noopener" data-track="click_directions"><?php lumen_e('cta.directions'); ?></a>
          </div>
        </li>
        <li class="flex gap-3">
          <span class="text-brand-600"><?php lumen_icon('calendar', 'h-5 w-5'); ?></span>
          <div>
            <p class="font-semibold text-navy-950"><?php lumen_e('cta.book'); ?></p>
            <a href="<?php echo esc_url($site['booking_url']); ?>" class="text-brand-600 hover:text-brand-700" target="_blank" rel="noopener" data-track="click_book">calendly.com/lumenincometax</a>
          </div>
        </li>
      </ul>
      <p class="mt-6 text-xs text-slate-500"><?php lumen_e('footer.note'); ?></p>
    </div>

    <div class="overflow-hidden rounded-2xl border border-slate-200 lg:col-span-4">
      <iframe src="<?php echo esc_url($site['map_embed']); ?>" title="<?php echo esc_attr(lumen_t('contact.map_title')); ?>" class="h-80 w-full lg:h-full lg:min-h-96" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div id="contact-form" class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-5">
      <h3 class="font-serif text-xl font-bold"><?php lumen_e('form.title'); ?></h3>
      <div id="lumen-contact-form" class="mt-6" data-interest="<?php echo esc_attr($args['interest'] ?? ''); ?>">
        <noscript><p class="text-sm text-slate-600"><?php lumen_e('contact.no_js'); ?></p></noscript>
      </div>
    </div>
  </div>
</section>
