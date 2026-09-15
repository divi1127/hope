import { motion } from 'framer-motion'
import { AlertTriangle, Phone, MapPin, Building2, ShieldAlert, MessageCircle } from 'lucide-react'
import Button from '../components/common/Button'
import { useSEO } from '../hooks/useSEO'
import { pageMeta } from '../utils/seo'

const emergencyCards = [
  {
    icon: Phone,
    title: 'Emergency Number',
    value: '+91 00000 00000',
    note: 'Placeholder — replace with your local emergency services number.',
  },
  {
    icon: Building2,
    title: 'Centre Phone',
    value: '+91 00000 00000',
    note: 'Placeholder — replace with the centre\u2019s official line.',
  },
  {
    icon: MapPin,
    title: 'Nearest Hospital',
    value: 'Nearest Hospital Name',
    note: 'Placeholder — replace with your nearest hospital details.',
  },
  {
    icon: MapPin,
    title: 'Emergency Address',
    value: 'Your Centre Address, City, India',
    note: 'Placeholder — replace with the correct address.',
  },
]

export default function EmergencyHelp() {
  useSEO(pageMeta['/emergency-help'])

  return (
    <>
      <div className="relative overflow-hidden bg-ink text-white pt-32 pb-20 min-h-[400px] flex flex-col">
        <div
          aria-hidden="true"
          className="organic-shape top-[-5rem] right-[-4rem] h-80 w-80 bg-deep/40"
        />
        <div
          aria-hidden="true"
          className="organic-shape bottom-[-8rem] left-[-6rem] h-96 w-96 bg-accent/20"
        />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-deep"
          >
            <AlertTriangle className="h-8 w-8" aria-hidden="true" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading leading-tight"
          >
            Need Immediate Help?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-2xl text-white/75 text-lg leading-relaxed"
          >
            If someone is in immediate physical danger or experiencing a
            medical emergency, please contact your local emergency medical
            services right away. Emergencies require appropriate medical
            assistance — do not wait.
          </motion.p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {emergencyCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="rounded-3xl bg-white border-2 border-deep/20 p-7 shadow-xl"
            >
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-deep text-white">
                <card.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="font-heading text-lg mb-1">{card.title}</h2>
              <p className="font-semibold text-deep">{card.value}</p>
              <p className="mt-2 text-xs text-ink/55 leading-relaxed">
                {card.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <section className="py-16 md:py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2.5rem] bg-primary/40 border border-deep/20 p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading mb-3">
                If It Is Not a Medical Emergency but Urgent
              </h2>
              <p className="text-ink/70 leading-relaxed max-w-xl">
                If the situation is urgent but not a medical emergency, you
                can reach the centre directly or send a message through
                WhatsApp. Please clearly state that it is urgent so we can
                respond as quickly as possible.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <Button to="/contact">Contact the Centre</Button>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-accent px-8 py-4 font-semibold text-accent hover:bg-accent hover:text-white transition-colors"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 flex items-start gap-3 rounded-3xl bg-white border border-ink/10 p-6"
        >
          <ShieldAlert
            className="h-6 w-6 text-deep shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <p className="text-sm text-ink/70 leading-relaxed">
            Important: The contact details shown on this page are placeholders
            and must be replaced with verified, correct emergency contact
            information before the website goes live. Do not use this page as a
            substitute for your local emergency medical services.
          </p>
        </motion.div>
      </section>
    </>
  )
}