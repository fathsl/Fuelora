import { useInView } from '../hooks/useInView'

type Part = { text: string; className?: string }
type Props = { parts: Part[]; as?: 'h1' | 'h2' | 'h3'; className?: string; delay?: number }

/** Heading whose words slide up out of a mask one after another. */
export default function SplitText({ parts, as: Tag = 'h2', className = '', delay = 0 }: Props) {
  const [ref, shown] = useInView<HTMLHeadingElement>(0.3)
  let i = 0
  return (
    <Tag ref={ref} className={`split ${shown ? 'in' : ''} ${className}`}>
      {parts.map((p, pi) =>
        p.text.split(' ').map((w, wi) => {
          const d = delay + i++ * 70
          return (
            <span key={`${pi}-${wi}`}>
              <span className="word">
                <span className={p.className} style={{ transitionDelay: `${d}ms` }}>
                  {w}
                </span>
              </span>{' '}
            </span>
          )
        }),
      )}
    </Tag>
  )
}
