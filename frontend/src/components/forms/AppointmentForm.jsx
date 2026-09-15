import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import Modal from '../common/Modal'

const inputClasses =
  'w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-shadow'

const labelClasses = 'block text-sm font-semibold mb-1.5'

export default function AppointmentForm() {
  const [form, setForm] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    age: '',
    preferredProgram: '',
    gender: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
    consent: false,
  })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validate = () => {
    const next = {}
    if (!form.fullName.trim()) next.fullName = 'Please enter your full name.'
    if (!form.phoneNumber.trim()) next.phoneNumber = 'Please enter a phone number.'
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = 'Please enter a valid email address.'
    }
    if (!form.preferredProgram) next.preferredProgram = 'Please select a program.'
    if (!form.gender) next.gender = 'Please select a program type.'
    if (!form.preferredDate) next.preferredDate = 'Please select a preferred date.'
    if (!form.consent)
      next.consent = 'Please agree to be contacted regarding your enquiry.'
    return next
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return
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
          <label htmlFor="fullName" className={labelClasses}>
            Full Name <span className="text-deep">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={form.fullName}
            onChange={handleChange}
            className={`${inputClasses} ${
              errors.fullName ? 'border-deep' : ''
            }`}
            aria-invalid={!!errors.fullName}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-deep">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label htmlFor="phoneNumber" className={labelClasses}>
            Phone Number <span className="text-deep">*</span>
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            value={form.phoneNumber}
            onChange={handleChange}
            className={`${inputClasses} ${
              errors.phoneNumber ? 'border-deep' : ''
            }`}
            aria-invalid={!!errors.phoneNumber}
          />
          {errors.phoneNumber && (
            <p className="mt-1 text-xs text-deep">{errors.phoneNumber}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            id="email"
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
          <label htmlFor="age" className={labelClasses}>
            Age
          </label>
          <input
            id="age"
            name="age"
            type="number"
            min="1"
            max="120"
            value={form.age}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="preferredProgram" className={labelClasses}>
            Preferred Program <span className="text-deep">*</span>
          </label>
          <select
            id="preferredProgram"
            name="preferredProgram"
            value={form.preferredProgram}
            onChange={handleChange}
            className={`${inputClasses} ${
              errors.preferredProgram ? 'border-deep' : ''
            }`}
            aria-invalid={!!errors.preferredProgram}
          >
            <option value="">Select a program</option>
            <option>De-Addiction Program</option>
            <option>Alcohol Recovery</option>
            <option>Drug Recovery</option>
            <option>Smoking Cessation</option>
            <option>Counselling</option>
            <option>Behavioural Therapy</option>
            <option>Family Counselling</option>
            <option>Rehabilitation &amp; Aftercare</option>
          </select>
          {errors.preferredProgram && (
            <p className="mt-1 text-xs text-deep">
              {errors.preferredProgram}
            </p>
          )}
        </div>

        <fieldset>
          <legend className={labelClasses}>
            Men / Women Program <span className="text-deep">*</span>
          </legend>
          <div className="flex gap-4">
            {['Men', 'Women'].map((option) => (
              <label
                key={option}
                className="flex flex-1 items-center gap-2 rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm cursor-pointer has-[:checked]:border-accent has-[:checked]:bg-primary/40 transition-colors"
              >
                <input
                  type="radio"
                  name="gender"
                  value={option}
                  onChange={handleChange}
                  className="accent-accent"
                />
                {option}
              </label>
            ))}
          </div>
          {errors.gender && (
            <p className="mt-1 text-xs text-deep">{errors.gender}</p>
          )}
        </fieldset>

        <div>
          <label htmlFor="preferredDate" className={labelClasses}>
            Preferred Date <span className="text-deep">*</span>
          </label>
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            value={form.preferredDate}
            onChange={handleChange}
            className={`${inputClasses} ${
              errors.preferredDate ? 'border-deep' : ''
            }`}
            aria-invalid={!!errors.preferredDate}
          />
          {errors.preferredDate && (
            <p className="mt-1 text-xs text-deep">{errors.preferredDate}</p>
          )}
        </div>

        <div>
          <label htmlFor="preferredTime" className={labelClasses}>
            Preferred Time
          </label>
          <input
            id="preferredTime"
            name="preferredTime"
            type="time"
            value={form.preferredTime}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className={labelClasses}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        <div className="md:col-span-2">
          <label className="flex items-start gap-3 text-sm text-ink/70">
            <input
              type="checkbox"
              name="consent"
              checked={form.consent}
              onChange={handleChange}
              className="mt-0.5 accent-accent"
            />
            I agree to be contacted regarding my enquiry.{' '}
            <span className="text-deep">*</span>
          </label>
          {errors.consent && (
            <p className="mt-1 text-xs text-deep">{errors.consent}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full md:w-auto rounded-full bg-accent px-10 py-4 font-semibold text-white hover:bg-deep hover:-translate-y-0.5 transition-all shadow-soft"
          >
            Request Consultation
          </button>
        </div>
      </form>

      <Modal open={success} onClose={() => setSuccess(false)} label="Request received">
        <div className="text-center">
          <span className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-deep">
            <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
          </span>
          <h3 className="text-2xl font-heading mb-2">
            Thank You. Your Request Has Been Received.
          </h3>
          <p className="text-ink/70 text-sm leading-relaxed">
            Our team will reach out to you confidentially. No payment or
            booking is confirmed on this screen — a member of our team will
            contact you shortly.
          </p>
        </div>
      </Modal>
    </>
  )
}