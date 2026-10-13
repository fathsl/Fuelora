import { useState } from 'react'
import type { SubmitEvent } from 'react'
import { useTranslation } from 'react-i18next'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

const CONTACT_EMAIL = 'fathtest5@gmail.com'
// FormSubmit forwards the form to CONTACT_EMAIL (first submission requires a one-time activation email).
const ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`

const FIELD =
  'w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none backdrop-blur placeholder:text-white/50 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const { t } = useTranslation()
  const [status, setStatus] = useState<Status>('idle')
  const [detail, setDetail] = useState('')

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
      if (!res.ok || json.success === 'false' || json.success === false) throw new Error(json.message || `HTTP ${res.status}`)
      form.reset()
      setStatus('sent')
    } catch (err) {
      console.error('Contact form failed:', err)
      setDetail(err instanceof Error ? err.message : '')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="t-ink sec relative isolate overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <img src="/images/station-night.jpg" alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-50" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0e2a3b] via-[#0e2a3b]/60 to-[#0e2a3b]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHead align="left" badge={t('contact.badge')} title={t('contact.title')} subtitle={t('contact.subtitle')} />
        </div>

        <Reveal delay={200}>
          <form onSubmit={submit} className="space-y-4 rounded-3xl border border-white/15 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            <input required name="name" placeholder={t('contact.name')} aria-label={t('contact.name')} className={FIELD} />
            <input required type="email" name="email" placeholder={t('contact.email')} aria-label={t('contact.email')} className={FIELD} />
            <textarea required name="message" rows={5} placeholder={t('contact.message')} aria-label={t('contact.message')} className={FIELD} />
            <button disabled={status === 'sending'} className="btn-primary w-full rounded-full px-8 py-3.5 font-semibold shadow-lg shadow-amber-500/20 transition hover:brightness-110 disabled:opacity-60">
              {status === 'sending' ? t('contact.sending') : t('contact.send')}
            </button>
            <p role="status" className={`text-center text-sm ${status === 'error' ? 'text-red-300' : 'text-emerald-300'}`}>
              {status === 'sent' && t('contact.sent')}
              {status === 'error' && `${t('contact.error')}${detail ? ` (${detail})` : ''}`}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
