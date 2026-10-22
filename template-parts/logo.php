<?php
// Logotipos oficiales de Lumen Income Tax (assets/brand/, copias optimizadas de los originales en la biblioteca de medios).
// Args: variant ('wordmark' | 'seal' | 'symbol'), class, light (true: versión blanca para fondos oscuros), alt.
$variant = $args['variant'] ?? 'wordmark';
$file = "/assets/brand/$variant.png";
$size = getimagesize(get_theme_file_path($file));
$class = trim(($args['class'] ?? 'h-11 w-auto') . (!empty($args['light']) ? ' logo-white' : ''));
?>
<img src="<?php echo esc_url(get_theme_file_uri($file)); ?>" alt="<?php echo esc_attr($args['alt'] ?? lumen_site()['name']); ?>" width="<?php echo (int) $size[0]; ?>" height="<?php echo (int) $size[1]; ?>" class="<?php echo esc_attr($class); ?>" decoding="async">
