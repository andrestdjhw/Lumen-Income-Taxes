<?php
$centered = ($args['align'] ?? 'center') === 'center';
$dark = !empty($args['dark']);
$reveal = ($args['reveal'] ?? true) !== false;
?>
<div class="max-w-2xl <?php echo $centered ? 'mx-auto text-center' : ''; ?>">
  <?php if (!empty($args['eyebrow'])) { ?>
    <p class="eyebrow <?php echo $dark ? 'text-capa' : ''; ?>"<?php echo $reveal ? lumen_reveal('up') : ''; ?>><?php echo lumen_format($args['eyebrow']); ?></p>
  <?php } ?>
  <h2 class="mt-3 text-3xl font-bold sm:text-4xl <?php echo $dark ? 'text-white' : ''; ?>"<?php echo $reveal ? lumen_reveal('up', 1) : ''; ?>><?php echo lumen_format($args['title']); ?></h2>
  <?php if (!empty($args['text'])) { ?>
    <p class="mt-4 text-base <?php echo $dark ? 'text-celeste' : 'text-ink/70'; ?>"<?php echo $reveal ? lumen_reveal('up', 2) : ''; ?>><?php echo lumen_format($args['text']); ?></p>
  <?php } ?>
</div>
