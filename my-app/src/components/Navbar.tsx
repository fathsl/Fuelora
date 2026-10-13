import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ICONS } from '../constants/icons'
import Icon from './Icon'
import LangSwitch from './LangSwitch'
import Logo from './Logo'
import MobileMenu from './MobileMenu'
import NavLinks from './NavLinks'
import SearchBox from './SearchBox'
import ThemeButton from './ThemeButton'

type Props = { dark: boolean; toggle: () => void }

export default function Navbar({ dark, toggle }: Props) {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-[#0e2a3b]/90">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <a href="#home" className="shrink-0">
            <Logo dark={dark} />
          </a>

          <NavLinks className="hidden items-center gap-6 lg:flex" />

          <div className="hidden items-center gap-3 lg:flex">
            <SearchBox className="w-56" />
            <LangSwitch />
            <ThemeButton dark={dark} toggle={toggle} />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeButton dark={dark} toggle={toggle} />
            <button onClick={() => setOpen(true)} aria-label={t('nav.menu')} className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">
              <Icon d={ICONS.menu} className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>
      {/* Rendered outside <header>: its backdrop-blur would otherwise trap fixed children */}
      <MobileMenu open={open} onClose={close} dark={dark} />
    </>
  )
}
