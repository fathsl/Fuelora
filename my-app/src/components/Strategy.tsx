import { useTranslation } from 'react-i18next'
import type { Messages } from '../types'
import SectionHead from './SectionHead'

export default function Strategy() {
  const { t } = useTranslation()
  const steps = t('strategy.steps', { returnObjects: true }) as Messages['strategy']['steps']
  return (
    <section id="strategy" className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl">
        <SectionHead title={t('strategy.title')} subtitle={t('strategy.subtitle')} />
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <span className="bg-gradient-to-br from-amber-500 to-orange-600 bg-clip-text text-5xl font-extrabold text-transparent">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
