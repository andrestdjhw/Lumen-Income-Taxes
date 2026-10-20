<?php $icons = array(1 => 'message', 2 => 'folder', 3 => 'users'); ?>
<section class="bg-navy-950 text-white">
  <ul class="container-site grid divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
    <?php foreach ($icons as $item => $icon) { ?>
      <li class="flex items-center gap-4 py-6 md:justify-center md:px-6">
        <?php lumen_icon($icon, 'h-9 w-9 text-brand-200'); ?>
        <div>
          <p class="font-semibold"><?php lumen_e("home.values.{$item}_title"); ?></p>
          <p class="text-sm text-slate-300"><?php lumen_e("home.values.{$item}_text"); ?></p>
        </div>
      </li>
    <?php } ?>
  </ul>
</section>
