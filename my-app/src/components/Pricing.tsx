import { useTranslation } from 'react-i18next'
import type { Messages } from '../types'
import PlanCard from './PlanCard'
import SectionHead from './SectionHead'

const FEATURED = 1

export default function Pricing() {
  const { t } = useTranslation()
  const plans = t('pricing.plans', { returnObjects: true }) as Messages['pricing']['plans']
  return (
    <section id="pricing" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHead title={t('pricing.title')} subtitle={t('pricing.subtitle')} />
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <PlanCard key={p.name} plan={p} featured={i === FEATURED} />
          ))}
        </div>
      </div>
    </section>
  )
}
