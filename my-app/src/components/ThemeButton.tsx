import { useTranslation } from 'react-i18next'
import { ICONS } from '../constants/icons'
import Icon from './Icon'

type Props = { dark: boolean; toggle: () => void }

export default function ThemeButton({ dark, toggle }: Props) {
  const { t } = useTranslation()
  return (
    <button onClick={toggle} aria-label={t('nav.theme')} className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
      <Icon d={dark ? ICONS.sun : ICONS.moon} className="h-4 w-4" />
    </button>
  )
}
