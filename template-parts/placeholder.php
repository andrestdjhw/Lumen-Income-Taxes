<?php
// Espacio reservado para fotografía real (pendiente de la clienta). El brief pide evitar fotos de stock genéricas.
$label = $args['label'] ?? '';
$class = $args['class'] ?? '';
?>
<div class="relative flex items-center justify-center overflow-hidden bg-linear-to-br from-paper via-white to-celeste <?php echo esc_attr($class); ?>" role="img" aria-label="<?php echo esc_attr($label); ?>">
  <div class="flex flex-col items-center gap-2 px-4 text-center text-ink/65">
    <?php lumen_icon('image', 'h-8 w-8'); ?>
    <span class="text-xs font-medium"><?php echo esc_html($label); ?></span>
  </div>
</div>
