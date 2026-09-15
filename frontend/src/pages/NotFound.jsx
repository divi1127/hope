import { motion } from 'framer-motion'
import { Compass, ArrowLeft } from 'lucide-react'
import Button from '../components/common/Button'
import { useSEO } from '../hooks/useSEO'

export default function NotFound() {
  useSEO({
    title: 'Page Not Found | Hope De-Addiction Centre',
    description: 'This page took a different path.',
  })

  return (
    <>
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-20 md:pt-32 pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-primary text-deep"
        >
          <Compass className="h-12 w-12" aria-hidden="true" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-heading leading-tight"
        >
          This Page Took a Different Path.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-lg text-ink/70 max-w-xl mx-auto"
        >
          The page you are looking for does not exist or has moved. Let us help
          you find the right way forward.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9"
        >
          <Button to="/" size="lg">
            Back to Home
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          </Button>
        </motion.div>
      </section>
    </>
  )
}
