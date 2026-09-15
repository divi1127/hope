import PageHero from '../components/common/PageHero'
import AppointmentForm from '../components/forms/AppointmentForm'
import { useSEO } from '../hooks/useSEO'
import { pageMeta } from '../utils/seo'

export default function Appointment() {
  useSEO(pageMeta['/appointment'])

  return (
    <>
      <PageHero
        eyebrow="Book a Consultation"
        title="Request a Confidential Consultation"
        subtitle="Tell us a little about yourself and we will be in touch. This is a frontend-only form — no data is sent anywhere."
      />

      <section className="py-16 md:py-24 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-white border border-ink/5 shadow-soft p-8 md:p-12">
          <AppointmentForm />
        </div>
      </section>
    </>
  )
}
