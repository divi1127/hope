import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import Modal from '../common/Modal'

const inputClasses =
  'w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-shadow'

const labelClasses = 'block text-sm font-semibold mb-1.5'

export default function ContactForm({ compact = false }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) next.email = 'Please enter your email.'
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      next.email = 'Please enter a valid email.'
    if (!form.message.trim()) next.message = 'Please write a message.'
    return next
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length) return
    setSuccess(true)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        <div>
          <label htmlFor="contact-name" className={labelClasses}>
            Name <span className="text-deep">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className={`${inputClasses} ${errors.name ? 'border-deep' : ''}`}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-deep">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClasses}>
            Email <span className="text-deep">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className={`${inputClasses} ${errors.email ? 'border-deep' : ''}`}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-deep">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="contact-phone" className={labelClasses}>
            Phone
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="contact-subject" className={labelClasses}>
            Subject
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            value={form.subject}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="contact-message" className={labelClasses}>
            Message <span className="text-deep">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={compact ? 4 : 6}
            value={form.message}
            onChange={handleChange}
            className={`${inputClasses} ${errors.message ? 'border-deep' : ''}`}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-deep">{errors.message}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="rounded-full bg-accent px-10 py-4 font-semibold text-white hover:bg-deep hover:-translate-y-0.5 transition-all shadow-soft"
          >
            Send Message
          </button>
        </div>
      </form>

      <Modal open={success} onClose={() => setSuccess(false)} label="Message sent">
        <div className="text-center">
          <span className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-deep">
            <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
          </span>
          <h3 className="text-2xl font-heading mb-2">
            Thank You. Your Message Has Been Received.
          </h3>
          <p className="text-ink/70 text-sm leading-relaxed">
            A member of our team will be in touch with you shortly.
          </p>
        </div>
      </Modal>
    </>
  )
}