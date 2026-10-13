import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ICONS } from '../constants/icons'
import { NAV } from '../constants/nav'
import type { Messages } from '../types'
import Icon from './Icon'

type Props = { onPick?: () => void; className?: string }

export default function SearchBox({ onPick, className = '' }: Props) {
  const { t, i18n } = useTranslation()
  const [q, setQ] = useState('')
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Rebuilt only when the language changes.
  const index = useMemo(() => {
    const obj = <T,>(key: string) => t(key, { returnObjects: true }) as T
    const features = obj<Messages['features']['items']>('features.items')
    const steps = obj<Messages['strategy']['steps']>('strategy.steps')
    const plans = obj<Messages['pricing']['plans']>('pricing.plans')
    const faq = obj<Messages['faq']['items']>('faq.items')
    return [
      ...NAV.map((n) => ({ label: t(`nav.${n}`), id: n })),
      { label: t('strategy.title'), id: 'strategy' },
      ...features.map((x) => ({ label: x.title, id: 'features' })),
      ...steps.map((x) => ({ label: x.title, id: 'strategy' })),
      ...plans.map((x) => ({ label: x.name, id: 'pricing' })),
      ...faq.map((x) => ({ label: x.q, id: 'faq' })),
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language])

  const term = q.trim().toLowerCase()
  const results = term ? index.filter((i) => i.label.toLowerCase().includes(term)).slice(0, 6) : []

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', h)
    return () => document.removeEventListener('mousedown', h)
  }, [])

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setQ('')
    setOpen(false)
    onPick?.()
  }

  return (
    <div ref={ref} className={`relative ${className}`}>
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault()
          if (results[0]) go(results[0].id)
        }}
      >
        <Icon d={ICONS.search} className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          value={q}
          onChange={(e) => {
            setQ(e.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          placeholder={t('nav.search')}
          aria-label={t('nav.search')}
          className="w-full rounded-full border border-slate-200 bg-slate-100 py-2 pl-9 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
        />
      </form>
      {open && term && (
        <ul className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-800">
          {results.length ? (
            results.map((r, i) => (
              <li key={i}>
                <button onClick={() => go(r.id)} className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-amber-50 dark:text-slate-200 dark:hover:bg-slate-700">
                  {r.label}
                </button>
              </li>
            ))
          ) : (
            <li className="px-4 py-3 text-sm text-slate-500">{t('nav.noResults')}</li>
          )}
        </ul>
      )}
    </div>
  )
}
