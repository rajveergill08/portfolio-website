import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '../components/Reveal'

const contactDetails = [
  { label: 'Phone', icon: 'phone', value: import.meta.env.VITE_CONTACT_PHONE || '+91 8200133974', href: `tel:${import.meta.env.VITE_CONTACT_PHONE || '+918200133974'}` },
  { label: 'Email', icon: 'email', value: import.meta.env.VITE_CONTACT_EMAIL || 'grajveer260@gmail.com', href: `mailto:${import.meta.env.VITE_CONTACT_EMAIL || 'grajveer260@gmail.com'}` },
  { label: 'Location', icon: 'location', value: import.meta.env.VITE_CONTACT_LOCATION || 'Ahmedabad, Gujarat', href: '' },
  { label: 'GitHub', icon: 'github', value: import.meta.env.VITE_GITHUB_LABEL || 'github.com/rajveergill08', href: import.meta.env.VITE_GITHUB_URL || 'https://github.com/rajveergill08' },
  { label: 'LinkedIn', icon: 'linkedin', value: import.meta.env.VITE_LINKEDIN_LABEL || 'linkedin.com/in/rajveer-gill-0bba13369', href: import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/in/rajveer-gill-0bba13369' },
]

const initialForm = { name: '', email: '', subject: '', message: '' }

function ContactIcon({ name }) {
  const paths = {
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z" />,
    email: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    location: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    github: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.7-1.6 6.7-7.3a5.7 5.7 0 0 0-1.5-3.9A5.3 5.3 0 0 0 19.1 0S17.9-.4 15 1.5a13.4 13.4 0 0 0-6 0C6.1-.4 4.9 0 4.9 0a5.3 5.3 0 0 0-.1 3.3 5.7 5.7 0 0 0-1.5 3.9c0 5.7 3.4 6.9 6.7 7.3A4.8 4.8 0 0 0 9 18v4" />,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><path d="M2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></>,
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  else if (values.name.trim().length < 2) errors.name = 'Name must contain at least 2 characters.'
  if (!values.email.trim()) errors.email = 'Please enter your email.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Please enter a valid email address.'
  if (!values.subject.trim()) errors.subject = 'Please add a subject.'
  if (!values.message.trim()) errors.message = 'Please enter a message.'
  else if (values.message.trim().length < 20) errors.message = 'Message must contain at least 20 characters.'
  return errors
}

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: '', message: '' })
  const [sending, setSending] = useState(false)

  const updateField = ({ target }) => {
    setForm((current) => ({ ...current, [target.name]: target.value }))
    setErrors((current) => ({ ...current, [target.name]: '' }))
    setStatus({ type: '', message: '' })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    if (!serviceId || !templateId || !publicKey) {
      setStatus({ type: 'error', message: 'The contact service is not configured yet. Please use the email link instead.' })
      return
    }

    setSending(true)
    setStatus({ type: '', message: '' })
    try {
      await emailjs.send(serviceId, templateId, { from_name: form.name.trim(), reply_to: form.email.trim(), subject: form.subject.trim(), message: form.message.trim(), to_name: 'Rajveer Singh Gill' }, { publicKey })
      setForm(initialForm)
      setStatus({ type: 'success', message: 'Thanks! Your message has been sent successfully.' })
    } catch {
      setStatus({ type: 'error', message: 'Your message could not be sent. Please try again or contact me directly by email.' })
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="contact-section section-pad" id="contact">
      <div className="contact-layout contact-reference-layout">
        <motion.aside className="contact-details contact-reference-details" initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .6 }}>
          <Reveal className="contact-reference-heading"><h2>Contact Me</h2><p>Have a project, opportunity, or collaboration idea? Send a message and I will get back to you.</p></Reveal>
          <div className="contact-detail-list">{contactDetails.map((detail) => { const content = <><i><ContactIcon name={detail.icon} /></i><div><span>{detail.label}</span><strong>{detail.value || 'Not configured'}</strong></div></>; return detail.href ? <motion.a whileHover={{ x: 5 }} key={detail.label} href={detail.href} target={detail.href.startsWith('http') ? '_blank' : undefined} rel={detail.href.startsWith('http') ? 'noreferrer' : undefined}>{content}</motion.a> : <div className="contact-detail" key={detail.label}>{content}</div> })}</div>
        </motion.aside>

        <motion.form className="contact-form contact-reference-form" onSubmit={handleSubmit} noValidate aria-busy={sending} initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .6, delay: .1 }}>
          <label>Name<input name="name" value={form.name} onChange={updateField} placeholder="Your name" autoComplete="name" maxLength="80" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />{errors.name && <span className="field-error" id="name-error">{errors.name}</span>}</label>
          <label>Email<input name="email" type="email" value={form.email} onChange={updateField} placeholder="your@email.com" autoComplete="email" maxLength="160" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />{errors.email && <span className="field-error" id="email-error">{errors.email}</span>}</label>
          <label>Subject<input name="subject" value={form.subject} onChange={updateField} placeholder="Project inquiry" maxLength="120" aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? 'subject-error' : undefined} />{errors.subject && <span className="field-error" id="subject-error">{errors.subject}</span>}</label>
          <label>Message<textarea name="message" value={form.message} onChange={updateField} placeholder="Tell me about your idea" rows="6" maxLength="2000" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />{errors.message && <span className="field-error" id="message-error">{errors.message}</span>}</label>
          <motion.button type="submit" className="submit-button" disabled={sending} whileHover={sending ? {} : { y: -3 }} whileTap={sending ? {} : { scale: .98 }}>{sending ? <><i className="button-spinner" /> Sending...</> : 'Send Message'}</motion.button>
          <AnimatePresence mode="wait">{status.message && <motion.div key={status.type} className={`form-status ${status.type}`} role={status.type === 'error' ? 'alert' : 'status'} aria-live="polite" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}><i aria-hidden="true">{status.type === 'success' ? '✓' : '!'}</i>{status.message}</motion.div>}</AnimatePresence>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
