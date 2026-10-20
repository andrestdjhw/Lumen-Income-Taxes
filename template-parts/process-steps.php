<?php $icons = array('message', 'file-text', 'check-circle', 'users'); ?>
<ol class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
  <?php foreach ($icons as $index => $icon) {
    $step = $index + 1; ?>
    <li class="relative text-center">
      <span class="pointer-events-none absolute inset-x-0 -top-6 font-serif text-7xl font-bold text-brand-200/70 select-none" aria-hidden="true"><?php printf('%02d', $step); ?></span>
      <div class="relative mx-auto flex h-14 w-14 items-center justify-center text-brand-600"><?php lumen_icon($icon, 'h-10 w-10'); ?></div>
      <h3 class="relative mt-4 text-lg font-bold"><?php lumen_e("process.step$step.title"); ?></h3>
      <p class="relative mx-auto mt-2 max-w-xs text-sm text-slate-600"><?php lumen_e("process.step$step.text"); ?></p>
      <?php if ($step < count($icons)) { ?>
        <span class="absolute top-6 -right-6 hidden text-brand-500 lg:block"><?php lumen_icon('arrow-right', 'h-5 w-5'); ?></span>
      <?php } ?>
    </li>
  <?php } ?>
</ol>
