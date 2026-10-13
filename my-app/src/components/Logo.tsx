// The logo PNGs have large empty margins, so each is cropped to its artwork.
// Crop boxes (px) were measured from the files in /public.
const LOGOS = {
  dark: { src: '/Fuelora_dark_mode.png', w: 1195, x: 358, y: 235, cw: 510, ch: 118, size: 'h-6 sm:h-7' },
  light: { src: '/Fuelora_light_mode.png', w: 810, x: 251, y: 104, cw: 324, ch: 104, size: 'h-9 sm:h-10' },
}

export default function Logo({ dark }: { dark: boolean }) {
  const l = dark ? LOGOS.dark : LOGOS.light
  return (
    <span className={`relative block overflow-hidden ${l.size}`} style={{ aspectRatio: `${l.cw} / ${l.ch}` }}>
      <img
        src={l.src}
        alt="Fuelora"
        className="absolute max-w-none"
        style={{ width: `${(l.w / l.cw) * 100}%`, left: `${(-l.x / l.cw) * 100}%`, top: `${(-l.y / l.ch) * 100}%` }}
      />
    </span>
  )
}
