import { useCallback, useEffect, useState } from 'react'

export function useTheme() {
  const [dark, setDark] = useState(() => {
    try {
      const s = localStorage.getItem('theme')
      if (s) return s === 'dark'
    } catch {
      /* ignore */
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch {
      /* ignore */
    }
  }, [dark])

  const toggle = useCallback(() => setDark((d) => !d), [])
  return [dark, toggle] as const
}
