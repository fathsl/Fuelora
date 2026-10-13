import { useState } from 'react'
import type { SubmitEvent } from 'react'
import { useTranslation } from 'react-i18next'
import SectionHead from './SectionHead'

const CONTACT_EMAIL = 'fathtest5@gmail.com'
// FormSubmit forwards the form to CONTACT_EMAIL (first submission requires a one-time activation email).
const ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`

const FIELD =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 dark:border-slate-700 dark:bg-slate-900 dark:text-white'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const { t } = useTranslation()
  const [status, setStatus] = useState<Status>('idle')

  const submit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
          _subject: `Fuelora contact: ${data.get('name')}`,
          _replyto: data.get('email'),
          _template: 'table',
        }),
      })
      const json = await res.json()
      if (!res.ok || json.success === 'false' || json.success === false) throw new Error()
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <SectionHead title={t('contact.title')} subtitle={t('contact.subtitle')} />
        <form onSubmit={submit} className="space-y-4">
          <input required name="name" placeholder={t('contact.name')} aria-label={t('contact.name')} className={FIELD} />
          <input required type="email" name="email" placeholder={t('contact.email')} aria-label={t('contact.email')} className={FIELD} />
          <textarea required name="message" rows={5} placeholder={t('contact.message')} aria-label={t('contact.message')} className={FIELD} />
          <button
            disabled={status === 'sending'}
            className="w-full rounded-full bg-amber-500 px-8 py-3 font-semibold text-slate-900 shadow-lg shadow-amber-500/30 transition hover:bg-amber-400 disabled:opacity-60"
          >
            {status === 'sending' ? t('contact.sending') : t('contact.send')}
          </button>
          <p role="status" className={`text-center text-sm ${status === 'error' ? 'text-red-600 dark:text-red-400' : 'text-emerald-600 dark:text-emerald-400'}`}>
            {status === 'sent' && t('contact.sent')}
            {status === 'error' && t('contact.error')}
          </p>
        </form>
      </div>
    </section>
  )
}
