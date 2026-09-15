import PageHero from '../components/common/PageHero'
import FAQAccordion from '../components/common/FAQAccordion'
import CTASection from '../components/sections/CTASection'
import { faqs } from '../data/faq'
import { useSEO } from '../hooks/useSEO'
import { pageMeta } from '../utils/seo'

export default function FAQs() {
  useSEO(pageMeta['/faq'])

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="Honest answers to the questions we hear most often. Search for a topic or browse below."
      />

      <section className="py-16 md:py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FAQAccordion faqs={faqs} />
      </section>

      <CTASection />
    </>
  )
}
