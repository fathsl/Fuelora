import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

type Props = { children: ReactNode; delay?: number; className?: string }

/** Fades and slides its children up the first time they scroll into view. */
export default function Reveal({ children, delay = 0, className = '' }: Props) {
  const [ref, shown] = useInView<HTMLDivElement>()
  return (
    <div ref={ref} className={`reveal ${shown ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
