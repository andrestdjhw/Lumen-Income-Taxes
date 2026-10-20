<?php
// Espacio reservado para fotografía real (pendiente de la clienta). El brief pide evitar fotos de stock genéricas.
$label = $args['label'] ?? '';
$class = $args['class'] ?? '';
?>
<div class="relative flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-200 via-slate-100 to-brand-100 <?php echo esc_attr($class); ?>" role="img" aria-label="<?php echo esc_attr($label); ?>">
  <div class="flex flex-col items-center gap-2 px-4 text-center text-slate-500">
    <?php lumen_icon('image', 'h-8 w-8'); ?>
    <span class="text-xs font-medium"><?php echo esc_html($label); ?></span>
  </div>
</div>
