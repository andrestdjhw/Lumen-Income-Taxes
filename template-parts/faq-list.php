<?php
// Acordeón accesible sin JavaScript: la pregunta y la respuesta completas quedan en el HTML (brief, sección 08).
// Args opcionales: items (lista de preguntas) o key (clave del copy). Por defecto, las destacadas del Home.
$items = $args['items'] ?? (isset($args['key']) ? lumen_t($args['key']) : lumen_faq_featured());
?>
<div class="divide-y divide-ink/10 rounded-xl border border-ink/10 bg-white">
  <?php foreach ($items as $index => $item) { ?>
    <details class="group px-5"<?php echo lumen_reveal('up', $index); ?>>
      <summary class="flex cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
        <h3 class="text-base font-semibold transition-colors group-hover:text-cianotipo"><?php echo esc_html($item['q']); ?></h3>
        <span class="text-cianotipo transition-transform group-open:rotate-45"><?php lumen_icon('plus', 'h-5 w-5'); ?></span>
      </summary>
      <p class="pb-5 text-ink/70"><?php echo esc_html($item['a']); ?></p>
    </details>
  <?php } ?>
</div>
