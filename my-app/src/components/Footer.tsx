import { useTranslation } from 'react-i18next'
import { NAV } from '../constants/nav'
import Logo from './Logo'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="t-ink sec border-t bd px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="text-center md:text-left">
          <Logo dark />
          <p className="tx-muted mt-3 text-sm">{t('footer.tagline')}</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          {NAV.map((n) => (
            <a key={n} href={`#${n}`} className="tx-muted transition hover:text-amber-400">
              {t(`nav.${n}`)}
            </a>
          ))}
        </nav>
      </div>
      <p className="tx-muted mx-auto mt-10 max-w-7xl border-t bd pt-6 text-center text-sm md:text-left">
        © {new Date().getFullYear()} Fuelora. {t('footer.rights')}
      </p>
    </footer>
  )
}
