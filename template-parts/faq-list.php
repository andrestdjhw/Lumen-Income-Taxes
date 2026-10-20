<?php
// Acordeón accesible sin JavaScript: la pregunta y la respuesta completas quedan en el HTML (brief, sección 08).
$items = lumen_t('faq.items');
?>
<div class="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
  <?php foreach ($items as $item) { ?>
    <details class="group px-5">
      <summary class="flex cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
        <h3 class="text-base font-semibold"><?php echo esc_html($item['q']); ?></h3>
        <span class="text-brand-600 transition-transform group-open:rotate-45"><?php lumen_icon('plus', 'h-5 w-5'); ?></span>
      </summary>
      <p class="pb-5 text-slate-600"><?php echo esc_html($item['a']); ?></p>
    </details>
  <?php } ?>
</div>
