import { useTranslation } from 'react-i18next'
import type { Messages } from '../types'

export default function Hero() {
  const { t } = useTranslation()
  const stats = t('hero.stats', { returnObjects: true }) as Messages['hero']['stats']
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-amber-400/30 blur-3xl dark:bg-amber-500/20" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl dark:bg-orange-600/20" />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <span className="inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-700 dark:text-amber-400">{t('hero.badge')}</span>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
          {t('hero.title')}{' '}
          <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">{t('hero.highlight')}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">{t('hero.subtitle')}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#pricing" className="w-full rounded-full bg-amber-500 px-8 py-3 font-semibold text-slate-900 shadow-lg shadow-amber-500/30 transition hover:bg-amber-400 sm:w-auto">
            {t('hero.cta')}
          </a>
          <a href="#pricing" className="w-full rounded-full border border-slate-300 px-8 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 sm:w-auto dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
            {t('hero.secondary')}
          </a>
        </div>
        <dl className="mt-16 grid grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-slate-200 bg-white/60 p-4 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
              <dt className="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">{s.value}</dt>
              <dd className="mt-1 text-xs text-slate-500 sm:text-sm dark:text-slate-400">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
