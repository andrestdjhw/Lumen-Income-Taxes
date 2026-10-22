<?php
// Espacio reservado para fotografía real (pendiente de la clienta). El brief pide evitar fotos de stock genéricas.
// Args: label, class, avatar (true: silueta de persona estándar, para retratos pendientes; sin texto visible).
$label = $args['label'] ?? '';
$class = $args['class'] ?? '';

if (!empty($args['avatar'])) { ?>
  <div class="relative flex items-end justify-center overflow-hidden bg-linear-to-br from-celeste-light via-celeste to-capa <?php echo esc_attr($class); ?>" role="img" aria-label="<?php echo esc_attr($label); ?>">
    <svg viewBox="0 0 24 24" class="w-3/4 text-white/90 drop-shadow-sm" aria-hidden="true" focusable="false">
      <circle cx="12" cy="9" r="4.75" fill="currentColor" />
      <path d="M2.5 24a9.5 9.5 0 0 1 19 0Z" fill="currentColor" />
    </svg>
  </div>
  <?php return;
} ?>
<div class="relative flex items-center justify-center overflow-hidden bg-linear-to-br from-paper via-white to-celeste <?php echo esc_attr($class); ?>" role="img" aria-label="<?php echo esc_attr($label); ?>">
  <div class="flex flex-col items-center gap-2 px-4 text-center text-ink/65">
    <?php lumen_icon('image', 'h-8 w-8'); ?>
    <span class="text-xs font-medium"><?php echo esc_html($label); ?></span>
  </div>
</div>
