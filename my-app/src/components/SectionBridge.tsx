import type { CSSProperties } from 'react'
import { useScrollProgress } from '../hooks/useScrollProgress'

export type Theme = 'ink' | 'paper' | 'amber'
export type Scene = 'truck' | 'truck-back' | 'cans'

// One 1200x600 tile of a liquid surface (crest at y=30). The first is filled below the
// surface (used as a mask that reveals the next section), the second is just the surface line.
const WAVE = 'M0 30Q150-5 300 30T600 30T900 30T1200 30'
const tile = (body: string) => `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'>${body}</svg>`)}")`
const WAVE_VARS = {
  '--wave-fill': tile(`<path d='${WAVE}V600H0Z'/>`),
  '--wave-stroke': tile(`<path d='${WAVE}' fill='none' stroke='black' stroke-width='6'/>`),
} as CSSProperties

const TRUCK = '/images/cutouts/truck.png'
const CAN = '/images/cutouts/can.png'

/** Real fuel tanker (photo cut-out) that drives across as the bridge scrolls past. */
function Truck({ reverse }: { reverse: boolean }) {
  return (
    <div
      className="absolute bottom-3 h-24 sm:h-36"
      style={{ ['--t' as string]: reverse ? 'calc(1 - var(--p))' : 'var(--p)', left: 'calc(var(--t) * 100%)', transform: 'translateX(calc(var(--t) * -100%))' }}
    >
      <div className="absolute -bottom-1 inset-x-[10%] h-3 rounded-full bg-black/35 blur-md" />
      <img src={TRUCK} alt="" className="truck-photo h-full w-auto max-w-none" style={reverse ? { transform: 'scaleX(-1)' } : undefined} />
    </div>
  )
}

/** Real fuel can (photo cut-out) that fills with glowing fuel as you scroll. */
function Can({ k, offset, className }: { k: number; offset: number; className: string }) {
  return (
    <div className={`relative ${className}`} style={{ ['--f' as string]: `clamp(0, calc(var(--p) * ${k} - ${offset}), 1)` }}>
      <img src={CAN} alt="" className="block h-full w-auto max-w-none drop-shadow-2xl" />
      <div className="can-fuel absolute inset-0" style={{ WebkitMaskImage: `url(${CAN})`, maskImage: `url(${CAN})` }}>
        <div className="can-fuel-level absolute inset-x-0 bottom-0" />
      </div>
    </div>
  )
}

/**
 * Transition between two sections. The upper layer wears the previous section's colours,
 * the lower layer the next section's, revealed through a rising wave. A real tanker drives
 * across, or real fuel cans fill up, as you scroll.
 */
export default function SectionBridge({ from, to, scene }: { from: Theme; to: Theme; scene: Scene }) {
  const ref = useScrollProgress<HTMLDivElement>()
  return (
    <div ref={ref} aria-hidden className="bridge relative w-full overflow-hidden" style={WAVE_VARS}>
      <div className={`t-${from} sec absolute inset-0`} />
      <div className={`t-${to} sec wave-mask absolute inset-0`} />
      <div className="wave-line absolute inset-0" />
      {scene === 'cans' ? (
        <div className="absolute inset-x-0 bottom-2 flex items-end justify-around px-6">
          <Can k={1.7} offset={0.1} className="h-20 sm:h-28" />
          <Can k={1.5} offset={0} className="h-24 sm:h-36" />
          <Can k={1.7} offset={0.2} className="h-20 sm:h-28" />
        </div>
      ) : (
        <Truck reverse={scene === 'truck-back'} />
      )}
    </div>
  )
}
