<?php
// Foto de sección. Args: key, class, priority (true solo para la imagen principal visible al cargar),
// reveal (animación al hacer scroll: 'photo' por defecto, false para desactivarla).
// Para usar la foto real, reemplazar assets/images/{key}.webp conservando el mismo nombre.
$key = $args['key'];
$class = $args['class'] ?? '';
$photo = lumen_photo($key);

if (!$photo) {
  get_template_part('template-parts/placeholder', null, array('label' => 'Foto pendiente: ' . lumen_t("photo.$key"), 'class' => $class));
  return;
}

$priority = !empty($args['priority']);
$reveal = $args['reveal'] ?? 'photo';
?>
<div class="relative overflow-hidden <?php echo esc_attr($class); ?>"<?php echo $reveal ? lumen_reveal($reveal) : ''; ?>>
  <img
    src="<?php echo esc_url($photo['url']); ?>"
    alt="<?php echo esc_attr($photo['alt']); ?>"
    width="<?php echo $photo['width']; ?>"
    height="<?php echo $photo['height']; ?>"
    class="h-full w-full object-cover"
    loading="<?php echo $priority ? 'eager' : 'lazy'; ?>"
    <?php echo $priority ? 'fetchpriority="high"' : ''; ?>
    decoding="async"
  >
</div>
