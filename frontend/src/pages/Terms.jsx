import PageHero from '../components/common/PageHero'
import { useSEO } from '../hooks/useSEO'
import { pageMeta } from '../utils/seo'

const sections = [
  {
    title: 'Overview',
    body: 'This is a placeholder Terms & Conditions page for the Hope De-Addiction & Rehabilitation Centre website (frontend only). It will be reviewed and replaced with final, legally reviewed terms before launch.',
  },
  {
    title: 'Frontend-Only Website',
    body: 'This website is currently a frontend demonstration. Appointment and contact forms do not send data anywhere. No treatment, booking or medical advice is provided through this website in its current form.',
  },
  {
    title: 'No Medical Advice',
    body: 'Information published on this website (including blog articles and program descriptions) is for general awareness only and is not a substitute for professional medical advice, diagnosis or treatment. Always consult a qualified professional about your individual situation.',
  },
  {
    title: 'No Guaranteed Outcomes',
    body: 'We do not claim guaranteed, permanent or complete recovery. Recovery outcomes vary from person to person. Any statement suggesting otherwise should be reported to the centre directly.',
  },
  {
    title: 'Emergency Situations',
    body: 'This website cannot provide emergency medical assistance. If you or someone else is in an emergency, contact your local emergency medical services immediately.',
  },
  {
    title: 'Use of Content',
    body: 'Content on this site is provided for personal, non-commercial use. You may not republish content without permission.',
  },
  {
    title: 'Contact',
    body: 'Questions about these terms can be directed to the centre through the contact page.',
  },
]

export default function Terms() {
  useSEO(pageMeta['/terms'])

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="Placeholder section — to be replaced with final, legally reviewed terms."
      />
      <section className="py-16 md:py-24 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-heading mb-3">{section.title}</h2>
              <p className="text-ink/70 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
