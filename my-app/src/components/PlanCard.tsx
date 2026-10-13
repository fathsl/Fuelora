import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ICONS } from '../constants/icons'
import type { Messages } from '../types'
import Icon from './Icon'

type Props = { plan: Messages['pricing']['plans'][number]; featured: boolean }

function PlanCard({ plan, featured }: Props) {
  const { t } = useTranslation()
  return (
    <div
      className={`relative flex h-full flex-col rounded-3xl p-8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${featured ? 't-ink sec border border-amber-400/70 shadow-2xl lg:scale-105' : 'surface shadow-sm'}`}
    >
      {featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-[#0e2a3b]">{t('pricing.popular')}</span>}
      <h3 className="text-xl font-semibold">{plan.name}</h3>
      <p className="tx-muted mt-1 text-sm">{plan.desc}</p>
      <p className="mt-6 text-2xl font-extrabold">{t('pricing.price')}</p>
      <ul className="mt-8 flex-1 space-y-3 border-t bd pt-6">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-3 text-sm">
            <Icon d={ICONS.check} className="tx-accent h-4 w-4 shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <a href="#contact" className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-semibold transition hover:brightness-110 ${featured ? 'btn-primary' : 'btn-ghost hover:bg-black/5 dark:hover:bg-white/5'}`}>
        {t('pricing.choose')}
      </a>
    </div>
  )
}

export default memo(PlanCard)
