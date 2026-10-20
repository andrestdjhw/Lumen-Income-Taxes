<?php // Versión HTML del footer con el NAP oficial: se ve antes de que cargue React y queda disponible para buscadores. ?>
<?php $site = lumen_site(); ?>
<footer class="bg-navy-950 py-12 text-sm text-slate-300">
  <div class="container-site">
    <p class="font-semibold text-white"><?php echo esc_html($site['name']); ?></p>
    <address class="mt-2 not-italic"><?php echo esc_html("{$site['street']}, {$site['city']}, {$site['region']} {$site['postal_code']}"); ?></address>
    <a href="<?php echo esc_attr('tel:' . $site['phone_e164']); ?>" class="mt-1 inline-block hover:text-white"><?php echo esc_html($site['phone']); ?></a>
  </div>
</footer>
