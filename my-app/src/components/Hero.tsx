import { useTranslation } from 'react-i18next'
import { ICONS } from '../constants/icons'
import type { Messages } from '../types'
import Icon from './Icon'
import Reveal from './Reveal'
import SplitText from './SplitText'

function StationCard() {
  const { t } = useTranslation()
  const c = t('hero.card', { returnObjects: true }) as Messages['hero']['card']
  return (
    <div className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <p className="font-semibold">{c.title}</p>
        <span className="flex items-center gap-2 rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
          <span className="live-dot h-2 w-2 rounded-full bg-emerald-400" />
          {c.live}
        </span>
      </div>
      <ul className="mt-6 space-y-4">
        {c.tanks.map((tank) => (
          <li key={tank.name}>
            <div className="mb-1.5 flex justify-between text-sm">
              <span className="tx-muted">{tank.name}</span>
              <span className="font-semibold">{tank.level}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/15">
              <div className="bar-grow h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-300" style={{ width: `${tank.level}%` }} />
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 border-t border-white/15 pt-5">
        <p className="tx-muted text-sm">{c.sales}</p>
        <div className="mt-1 flex items-end justify-between gap-4">
          <div>
            <p className="text-3xl font-bold">$48,215</p>
            <p className="mt-1 text-xs font-medium text-emerald-300">{c.change}</p>
          </div>
          <svg viewBox="0 0 140 44" className="h-11 w-32" fill="none" aria-hidden>
            <defs>
              <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#f5a300" stopOpacity=".35" />
                <stop offset="1" stopColor="#f5a300" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 38L20 32L40 35L60 22L80 26L100 12L120 16L140 4V44H0Z" fill="url(#spark)" />
            <path d="M0 38L20 32L40 35L60 22L80 26L100 12L120 16L140 4" stroke="#f5a300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const { t } = useTranslation()
  const stats = t('hero.stats', { returnObjects: true }) as Messages['hero']['stats']
  return (
    <section id="home" className="t-ink sec relative isolate flex min-h-screen items-center overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <img src="/images/hero-refinery-night.jpg" alt="" className="kenburns absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0e2a3b]/95 via-[#0e2a3b]/75 to-[#0e2a3b]/35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0e2a3b] via-transparent to-[#0e2a3b]/40" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              {t('hero.badge')}
            </span>
          </Reveal>
          <SplitText
            as="h1"
            parts={[{ text: t('hero.title') }, { text: t('hero.highlight'), className: 'text-amber-400' }]}
            className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl"
            delay={150}
          />
          <Reveal delay={500}>
            <p className="tx-muted mt-6 max-w-xl text-lg leading-relaxed">{t('hero.subtitle')}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-semibold shadow-lg shadow-amber-500/20 transition hover:brightness-110">
                {t('hero.cta')}
                <Icon d={ICONS.arrow} className="h-4 w-4" />
              </a>
              <a href="#pricing" className="btn-ghost inline-flex items-center justify-center rounded-full px-8 py-3.5 font-semibold backdrop-blur transition hover:bg-white/10">
                {t('hero.secondary')}
              </a>
            </div>
          </Reveal>
          <Reveal delay={700}>
            <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-2xl font-bold sm:text-4xl">{s.value}</dt>
                  <dd className="tx-muted mt-1 text-xs sm:text-sm">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={600}>
            <StationCard />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
