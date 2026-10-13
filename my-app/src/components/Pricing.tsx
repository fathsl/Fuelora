import { useTranslation } from 'react-i18next'
import type { Messages } from '../types'
import PlanCard from './PlanCard'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

const FEATURED = 1

export default function Pricing() {
  const { t } = useTranslation()
  const plans = t('pricing.plans', { returnObjects: true }) as Messages['pricing']['plans']
  return (
    <section id="pricing" className="t-paper sec px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHead badge={t('pricing.badge')} title={t('pricing.title')} subtitle={t('pricing.subtitle')} />
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 120} className="h-full">
              <PlanCard plan={p} featured={i === FEATURED} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
