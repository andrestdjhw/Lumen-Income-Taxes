<?php
// Pasos del proceso con tarjeta de vidrio e inclinación 3D al pasar el mouse (.tilt-card en src/index.css, src/lib/tilt.js).
// Args: dark (true sobre fondos oscuros: textos e íconos en blanco y vidrio translúcido claro).
$icons = array('message', 'file-text', 'search', 'users');
$dark = !empty($args['dark']);
?>
<ol class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
  <?php foreach ($icons as $index => $icon) {
    $step = $index + 1; ?>
    <li class="relative text-center"<?php echo lumen_reveal('up', $index); ?>>
      <div class="tilt-card relative h-full rounded-2xl px-5 pt-12 pb-8" data-tilt>
        <div class="tilt-glass <?php echo $dark ? '' : 'tilt-glass-light'; ?>" aria-hidden="true"></div>
        <span class="tilt-layer-far pointer-events-none absolute inset-x-0 top-4 text-7xl font-bold select-none <?php echo $dark ? 'text-white/10' : 'text-celeste'; ?>" aria-hidden="true"><?php printf('%02d', $step); ?></span>
        <div class="tilt-layer-near relative mx-auto flex h-14 w-14 items-center justify-center <?php echo $dark ? 'text-white' : 'text-lumen'; ?>"><?php lumen_icon($icon, 'h-10 w-10'); ?></div>
        <h3 class="tilt-layer-mid relative mt-4 text-lg font-bold <?php echo $dark ? 'text-white' : ''; ?>"><?php lumen_e("process.step$step.title"); ?></h3>
        <p class="tilt-layer-mid relative mx-auto mt-2 max-w-xs text-sm <?php echo $dark ? 'text-white/90' : 'text-ink/70'; ?>"><?php lumen_e("process.step$step.text"); ?></p>
      </div>
      <?php if ($step < count($icons)) { ?>
        <span class="absolute top-22 -right-6 hidden lg:block <?php echo $dark ? 'text-white/60' : 'text-capa'; ?>"><?php lumen_icon('arrow-right', 'h-5 w-5'); ?></span>
      <?php } ?>
    </li>
  <?php } ?>
</ol>
