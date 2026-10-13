import { useTranslation } from 'react-i18next'
import { ICONS } from '../constants/icons'
import type { Messages } from '../types'
import Icon from './Icon'
import Photo from './Photo'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

export default function Features() {
  const { t } = useTranslation()
  const items = t('features.items', { returnObjects: true }) as Messages['features']['items']
  return (
    <section id="features" className="t-paper sec px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-12">
        <div className="relative pb-10 lg:col-span-5">
          <Photo src="/images/pumps.jpg" alt="Fuel dispensers at a station" className="aspect-[4/5] rounded-3xl shadow-2xl" />
          <Photo src="/images/nozzle.jpg" alt="Refuelling a car" className="absolute -bottom-0 right-3 aspect-[4/3] w-44 rounded-2xl border-4 border-[var(--bg)] shadow-2xl sm:w-56 lg:-right-8" />
          <Reveal delay={400} className="absolute left-3 top-8 lg:-left-6">
            <div className="surface rounded-2xl px-5 py-4 shadow-xl">
              <p className="text-3xl font-bold">99.9%</p>
              <p className="tx-muted text-xs">{t('features.uptime')}</p>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <SectionHead align="left" badge={t('features.badge')} title={t('features.title')} subtitle={t('features.subtitle')} />
          <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {items.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="flex gap-4">
                  <div className="surface tx-accent flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-sm">
                    <Icon d={ICONS.features[i]} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{f.title}</h3>
                    <p className="tx-muted mt-1 text-sm leading-relaxed">{f.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
