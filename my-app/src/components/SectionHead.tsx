import Reveal from './Reveal'
import SplitText from './SplitText'

type Props = { title: string; subtitle?: string; badge?: string; align?: 'center' | 'left' }

export default function SectionHead({ title, subtitle, badge, align = 'center' }: Props) {
  const center = align === 'center'
  return (
    <div className={`mb-12 max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {badge && (
        <Reveal>
          <span className="tx-accent mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]">
            <span className="h-px w-8 bg-current" />
            {badge}
          </span>
        </Reveal>
      )}
      <SplitText parts={[{ text: title }]} className="text-3xl font-bold tracking-tight sm:text-5xl" />
      {subtitle && (
        <Reveal delay={250}>
          <p className="tx-muted mt-5 text-lg">{subtitle}</p>
        </Reveal>
      )}
    </div>
  )
}
