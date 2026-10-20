<?php
$centered = ($args['align'] ?? 'center') === 'center';
$dark = !empty($args['dark']);
?>
<div class="max-w-2xl <?php echo $centered ? 'mx-auto text-center' : ''; ?>">
  <?php if (!empty($args['eyebrow'])) { ?>
    <p class="eyebrow <?php echo $dark ? 'text-brand-200' : ''; ?>"><?php echo lumen_format($args['eyebrow']); ?></p>
  <?php } ?>
  <h2 class="mt-3 text-3xl font-bold sm:text-4xl <?php echo $dark ? 'text-white' : ''; ?>"><?php echo lumen_format($args['title']); ?></h2>
  <?php if (!empty($args['text'])) { ?>
    <p class="mt-4 text-base <?php echo $dark ? 'text-slate-300' : 'text-slate-600'; ?>"><?php echo lumen_format($args['text']); ?></p>
  <?php } ?>
</div>
