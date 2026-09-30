import Image from 'next/image';

/**
 * Delightz logo component
 *
 * variant:
 *  - "white" → white logo, for dark/purple backgrounds (hero, footer)
 *  - "full"  → blue logo on white, for light backgrounds (header, cards)
 */
export default function Logo({ variant = 'white', size = 48 }) {
  const src = variant === 'white' ? '/logo-white.png' : '/logo-full.png';

  // Height drives everything — width is auto to keep aspect ratio.
  const height = size;
  const width = size * 1.3; // your logo is slightly wider than tall

  return (
    <Image
      src={src}
      alt="Delightz Drinks And Events"
      width={width}
      height={height}
      priority
      style={{ height: `${height}px`, width: 'auto' }}
    />
  );
}