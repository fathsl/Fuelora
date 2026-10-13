import { useInView } from '../hooks/useInView'

type Props = { src: string; alt: string; className?: string }

/**
 * Real photograph that is unveiled (clip + slow zoom-out) when scrolled into view.
 * The observed wrapper is never clipped, otherwise it would never count as visible.
 */
export default function Photo({ src, alt, className = '' }: Props) {
  const [ref, shown] = useInView<HTMLDivElement>(0.1)
  return (
    <div ref={ref} className={`${className.includes('absolute') ? '' : 'relative'} ${className}`}>
      <div className={`photo-reveal absolute inset-0 overflow-hidden rounded-[inherit] ${shown ? 'in' : ''}`}>
        <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      </div>
    </div>
  )
}
