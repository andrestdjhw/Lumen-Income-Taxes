<?php $icons = array('id-card', 'file-text', 'receipt', 'folder'); ?>
<ul class="grid gap-4 sm:grid-cols-2 <?php echo esc_attr($args['columns'] ?? 'lg:grid-cols-4'); ?>">
  <?php foreach ($icons as $index => $icon) {
    $item = $index + 1; ?>
    <li class="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
      <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600"><?php lumen_icon($icon); ?></div>
      <h3 class="mt-4 text-sm font-bold"><?php lumen_e("bring.item$item.title"); ?></h3>
      <p class="mt-1 text-xs text-slate-600"><?php lumen_e("bring.item$item.text"); ?></p>
    </li>
  <?php } ?>
</ul>
