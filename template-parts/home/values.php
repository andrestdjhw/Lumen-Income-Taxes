<?php
// Cinta azul bajo el hero: servicios y valores en una fila con movimiento infinito de izquierda a derecha.
// El contenido se repite una vez para que el ciclo no tenga cortes; la copia queda oculta para lectores de pantalla y teclado.
$values = array(1 => 'message', 2 => 'folder', 3 => 'users');

// Todos los elementos con el mismo formato: ícono grande, título y una línea de texto. Los servicios enlazan a su página.
$items = array();
foreach (lumen_services() as $service) {
  $items[] = array('icon' => $service['icon'], 'title' => lumen_t('nav.' . $service['key']), 'text' => lumen_t("service.{$service['key']}.text"), 'url' => $service['url']);
}
foreach ($values as $item => $icon) {
  $items[] = array('icon' => $icon, 'title' => lumen_t("home.values.{$item}_title"), 'text' => lumen_t("home.values.{$item}_text"), 'url' => '');
}

$render_items = function () use ($items) {
  foreach ($items as $item) {
    $tag = $item['url'] ? 'a' : 'div'; ?>
    <li class="flex shrink-0 items-center">
      <<?php echo $tag; ?> <?php echo $item['url'] ? 'href="' . esc_url($item['url']) . '"' : ''; ?> class="group flex items-center gap-3 whitespace-nowrap">
        <?php lumen_icon($item['icon'], 'h-8 w-8 text-white transition-transform duration-300 group-hover:scale-110'); ?>
        <div>
          <p class="flex items-center gap-1.5 font-semibold <?php echo $item['url'] ? 'underline-offset-4 group-hover:underline' : ''; ?>">
            <?php echo esc_html($item['title']); ?>
            <?php if ($item['url']) {
              lumen_icon('arrow-right', 'h-4 w-4 text-capa transition-transform duration-300 group-hover:translate-x-1');
            } ?>
          </p>
          <p class="text-sm text-celeste"><?php echo esc_html($item['text']); ?></p>
        </div>
      </<?php echo $tag; ?>>
    </li>
    <li class="h-1.5 w-1.5 shrink-0 rounded-full bg-capa/60" aria-hidden="true"></li>
  <?php }
};
?>
<section class="shrink-0 overflow-hidden bg-lumen py-6 text-white short:py-4">
  <div class="group/marquee mask-x-from-90% mask-x-to-100% motion-reduce:mask-none">
    <div class="flex w-max animate-marquee group-hover/marquee:[animation-play-state:paused] group-focus-within/marquee:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none">
      <ul class="flex shrink-0 items-center gap-10 pr-10 motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-4 motion-reduce:px-4">
        <?php $render_items(); ?>
      </ul>
      <ul class="flex shrink-0 items-center gap-10 pr-10 motion-reduce:hidden" aria-hidden="true" inert>
        <?php $render_items(); ?>
      </ul>
    </div>
  </div>
</section>
