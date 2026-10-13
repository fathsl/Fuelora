import { useTranslation } from 'react-i18next'

const LANGS = ['en', 'tr'] as const

export default function LangSwitch() {
  const { i18n } = useTranslation()
  return (
    <div className="flex overflow-hidden rounded-full border border-slate-200 text-xs font-semibold dark:border-slate-700">
      {LANGS.map((l) => (
        <button
          key={l}
          onClick={() => i18n.changeLanguage(l)}
          className={`px-3 py-1.5 uppercase transition ${i18n.resolvedLanguage === l ? 'bg-amber-500 text-slate-900' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'}`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}
