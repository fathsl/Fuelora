import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ICONS } from '../constants/icons'
import type { Messages } from '../types'
import Icon from './Icon'

type Props = { plan: Messages['pricing']['plans'][number]; featured: boolean }

function PlanCard({ plan, featured }: Props) {
  const { t } = useTranslation()
  const muted = featured ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'
  const strong = featured ? '' : 'text-slate-900 dark:text-white'
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-8 ${featured ? 'border-amber-500 bg-slate-900 text-white shadow-2xl shadow-amber-500/20 lg:scale-105' : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'}`}
    >
      {featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-slate-900">{t('pricing.popular')}</span>}
      <h3 className={`text-xl font-semibold ${strong}`}>{plan.name}</h3>
      <p className={`mt-1 text-sm ${muted}`}>{plan.desc}</p>
      <p className={`mt-6 text-2xl font-extrabold ${strong}`}>{t('pricing.price')}</p>
      <ul className="mt-8 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className={`flex items-center gap-2 text-sm ${featured ? 'text-slate-200' : 'text-slate-600 dark:text-slate-300'}`}>
            <Icon d={ICONS.check} className="h-4 w-4 shrink-0 text-amber-500" />
            {f}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={`mt-8 rounded-full px-6 py-3 text-center font-semibold transition ${featured ? 'bg-amber-500 text-slate-900 hover:bg-amber-400' : 'border border-slate-300 text-slate-800 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800'}`}
      >
        {t('pricing.choose')}
      </a>
    </div>
  )
}

export default memo(PlanCard)
