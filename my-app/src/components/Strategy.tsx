import { useTranslation } from 'react-i18next'
import type { Messages } from '../types'
import Photo from './Photo'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

export default function Strategy() {
  const { t } = useTranslation()
  const steps = t('strategy.steps', { returnObjects: true }) as Messages['strategy']['steps']
  return (
    <section id="strategy" className="t-ink sec relative isolate overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <img src="/images/refinery-day.jpg" alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0e2a3b] via-[#0e2a3b]/80 to-[#0e2a3b]" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHead align="left" badge={t('strategy.badge')} title={t('strategy.title')} subtitle={t('strategy.subtitle')} />
          <ol>
            {steps.map((s, i) => (
              <li key={s.title} className="relative pb-8 pl-16 last:pb-0">
                {i < steps.length - 1 && <span className="absolute left-[1.375rem] top-12 bottom-0 w-px bg-white/20" />}
                <Reveal delay={i * 120}>
                  <span className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-amber-400/60 bg-[#0e2a3b] font-bold text-amber-400">{i + 1}</span>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="tx-muted mt-1 text-sm leading-relaxed">{s.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative">
          <Photo src="/images/tanker.jpg" alt="Fuel tanker trailer" className="aspect-[4/3] rounded-3xl shadow-2xl" />
          <Reveal delay={400} className="absolute inset-x-4 bottom-4">
            <p className="rounded-2xl border border-white/20 bg-black/40 px-5 py-4 text-sm font-medium backdrop-blur-md">{t('strategy.caption')}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
