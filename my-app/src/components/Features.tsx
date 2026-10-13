import { useTranslation } from 'react-i18next'
import { ICONS } from '../constants/icons'
import type { Messages } from '../types'
import Icon from './Icon'
import SectionHead from './SectionHead'

export default function Features() {
  const { t } = useTranslation()
  const items = t('features.items', { returnObjects: true }) as Messages['features']['items']
  return (
    <section id="features" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHead title={t('features.title')} subtitle={t('features.subtitle')} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => (
            <div key={f.title} className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 transition group-hover:bg-amber-500 group-hover:text-slate-900 dark:text-amber-400">
                <Icon d={ICONS.features[i]} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
