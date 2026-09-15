import { Mail, MapPin, Phone, Siren, Clock3 } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import ContactForm from '../components/forms/ContactForm'
import { siteConfig } from '../utils/seo'
import { useSEO } from '../hooks/useSEO'
import { pageMeta } from '../utils/seo'

const contactCards = [
  {
    icon: Phone,
    title: 'Phone',
    value: siteConfig.phone,
    sub: 'Confidential & discreet',
  },
  {
    icon: Mail,
    title: 'Email',
    value: siteConfig.email,
    sub: 'We reply within 24 hours',
  },
  {
    icon: MapPin,
    title: 'Address',
    value: siteConfig.address,
    sub: 'By appointment only',
  },
  {
    icon: Clock3,
    title: 'Working Hours',
    value: siteConfig.hours,
    sub: 'Emergency line always open',
  },
]

export default function Contact() {
  useSEO(pageMeta['/contact'])

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We Are Here, Confidentially"
        subtitle="Reach out by phone, email or the form below. Every enquiry is handled with privacy and care."
      />

      <section className="py-16 md:py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactCards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl bg-white border border-ink/5 p-7 shadow-soft"
            >
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-deep">
                <card.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="font-heading text-lg mb-1">{card.title}</h3>
              <p className="text-sm text-ink/80 font-medium break-all">
                {card.value}
              </p>
              <p className="text-xs text-ink/55 mt-1">{card.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div className="rounded-[2.5rem] bg-white border border-ink/5 shadow-soft p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-heading mb-8">
              Send Us a Message
            </h2>
            <ContactForm compact />
          </div>

          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-[2.5rem] shadow-lg min-h-[320px] border border-ink/5">
              <div className="h-full w-full bg-secondary/20 flex items-center justify-center">
                <div className="text-center px-6">
                  <MapPin className="mx-auto h-10 w-10 text-deep mb-3" aria-hidden="true" />
                  <p className="font-heading text-xl">{siteConfig.address}</p>
                  <p className="mt-2 text-sm text-ink/60">
                    Google Maps placeholder — replace with an embedded map when
                    real address details are provided.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="/emergency-help"
              className="flex items-center gap-4 rounded-3xl bg-ink text-white p-6 hover:bg-deep transition-colors group"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-deep group-hover:bg-ink transition-colors">
                <Siren className="h-6 w-6" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-heading text-lg">
                  Need Immediate Help?
                </span>
                <span className="block text-sm text-white/70">
                  Visit the emergency help page for urgent contacts.
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
