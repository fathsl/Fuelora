import { useTranslation } from 'react-i18next'
import { NAV } from '../constants/nav'

type Props = { onClick?: () => void; className?: string; linkClassName?: string }

export default function NavLinks({ onClick, className = '', linkClassName = 'text-sm' }: Props) {
  const { t } = useTranslation()
  return (
    <div className={className}>
      {NAV.map((n) => (
        <a
          key={n}
          href={`#${n}`}
          onClick={onClick}
          className={`${linkClassName} font-medium text-slate-600 transition hover:text-amber-600 dark:text-slate-300 dark:hover:text-amber-400`}
        >
          {t(`nav.${n}`)}
        </a>
      ))}
    </div>
  )
}
