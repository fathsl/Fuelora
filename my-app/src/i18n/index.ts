import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en'
import tr from './tr'

const saved = (() => {
  try {
    return localStorage.getItem('lang')
  } catch {
    return null
  }
})()

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, tr: { translation: tr } },
  lng: saved === 'tr' || saved === 'en' ? saved : navigator.language.startsWith('tr') ? 'tr' : 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  returnObjects: true,
})

i18n.on('languageChanged', (l) => {
  document.documentElement.lang = l
  try {
    localStorage.setItem('lang', l)
  } catch {
    /* ignore */
  }
})
document.documentElement.lang = i18n.language

export default i18n
