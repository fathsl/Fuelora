import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="border-t border-slate-200 px-4 py-8 text-center text-sm text-slate-500 dark:border-slate-800">
      © {new Date().getFullYear()} Fuelora. {t('footer.rights')}
    </footer>
  )
}
