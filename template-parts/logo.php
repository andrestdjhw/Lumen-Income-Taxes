<?php
// Logo provisional en texto + SVG: reemplazar cuando se entregue el branding final.
$large = ($args['size'] ?? '') === 'lg';
?>
<span class="inline-flex flex-col items-center leading-none">
  <svg viewBox="0 0 40 20" class="<?php echo $large ? 'h-8 w-16' : 'h-4 w-8'; ?> text-brand-500" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true">
    <path d="M13 19a7 7 0 0 1 14 0" />
    <?php for ($angle = 15; $angle <= 165; $angle += 15) {
      $rad = deg2rad($angle);
      printf('<line x1="%.2f" y1="%.2f" x2="%.2f" y2="%.2f" />', 20 + 9 * cos($rad), 19 - 9 * sin($rad), 20 + 17 * cos($rad), 19 - 17 * sin($rad));
    } ?>
  </svg>
  <span class="font-serif font-semibold tracking-[0.14em] <?php echo $large ? 'text-6xl' : 'text-2xl'; ?>">LUMEN</span>
  <span class="mt-1 font-medium tracking-[0.4em] <?php echo $large ? 'text-sm' : 'text-[0.55rem]'; ?>">INCOME TAX</span>
</span>
