import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ICONS } from '../constants/icons'
import type { Messages } from '../types'
import Icon from './Icon'
import SectionHead from './SectionHead'

export default function Faq() {
  const { t } = useTranslation()
  const [open, setOpen] = useState<number | null>(0)
  const items = t('faq.items', { returnObjects: true }) as Messages['faq']['items']
  return (
    <section id="faq" className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 dark:bg-slate-900/50">
      <div className="mx-auto max-w-3xl">
        <SectionHead title={t('faq.title')} />
        <div className="space-y-3">
          {items.map((it, i) => (
            <div key={it.q} className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
              <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-slate-900 dark:text-white">
                {it.q}
                <Icon d={ICONS.plus} className={`h-5 w-5 shrink-0 text-amber-500 transition-transform ${open === i ? 'rotate-45' : ''}`} />
              </button>
              <div className={`grid transition-all duration-300 ${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <p className="overflow-hidden px-5 text-sm text-slate-600 dark:text-slate-400">
                  <span className="block pb-4">{it.a}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
