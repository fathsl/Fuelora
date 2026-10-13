import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ICONS } from '../constants/icons'
import Icon from './Icon'
import LangSwitch from './LangSwitch'
import Logo from './Logo'
import NavLinks from './NavLinks'
import SearchBox from './SearchBox'

type Props = { open: boolean; onClose: () => void; dark: boolean }

export default function MobileMenu({ open, onClose, dark }: Props) {
  const { t } = useTranslation()

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', esc)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', esc)
    }
  }, [open, onClose])

  return (
    <>
      {/* Semi-transparent backdrop over the rest of the screen: page stays visible behind it, tapping it closes the menu */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      />
      {/* Drawer: full height, slides in from the left */}
      <aside
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-y-0 left-0 z-50 flex h-screen w-4/5 max-w-sm flex-col gap-6 border-r border-slate-200 bg-white p-6 shadow-2xl transition-transform duration-300 lg:hidden dark:border-slate-800 dark:bg-[#0e2a3b] ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between">
          <Logo dark={dark} />
          <button onClick={onClose} aria-label={t('nav.close')} className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">
            <Icon d={ICONS.close} className="h-6 w-6" />
          </button>
        </div>
        <SearchBox onPick={onClose} />
        <NavLinks onClick={onClose} className="flex flex-col gap-5" linkClassName="text-lg" />
        <div className="mt-auto">
          <LangSwitch />
        </div>
      </aside>
    </>
  )
}
