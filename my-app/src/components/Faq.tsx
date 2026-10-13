import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ICONS } from '../constants/icons'
import type { Messages } from '../types'
import Icon from './Icon'
import Photo from './Photo'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

export default function Faq() {
  const { t } = useTranslation()
  const [open, setOpen] = useState<number | null>(0)
  const items = t('faq.items', { returnObjects: true }) as Messages['faq']['items']
  return (
    <section id="faq" className="t-amber sec px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <Photo src="/images/station-day.jpg" alt="Fuel station" className="aspect-[16/10] rounded-3xl shadow-2xl lg:aspect-[4/5]" />
        <div>
          <SectionHead align="left" badge={t('faq.badge')} title={t('faq.title')} />
          <div className="space-y-3">
            {items.map((it, i) => (
              <Reveal key={it.q} delay={i * 80}>
                <div className="surface rounded-2xl shadow-sm">
                  <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold">
                    {it.q}
                    <Icon d={ICONS.plus} className={`h-5 w-5 shrink-0 transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`} />
                  </button>
                  <div className={`grid transition-all duration-300 ${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <p className="tx-muted px-6 pb-5 text-sm leading-relaxed">{it.a}</p>
                    </div>
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
