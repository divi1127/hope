import PageHero from '../components/common/PageHero'
import { useSEO } from '../hooks/useSEO'
import { pageMeta } from '../utils/seo'

const sections = [
  {
    title: 'Overview',
    body: 'This is a placeholder Privacy Policy for the Hope De-Addiction & Rehabilitation Centre website (frontend only). It will be reviewed and replaced with your complete, legally reviewed privacy policy before launch.',
  },
  {
    title: 'Information We Handle',
    body: 'This frontend demonstration does not collect or transmit personal data anywhere. Any form data entered is stored locally in the browser only and is never sent to a server. When a backend and forms go live, we will clearly describe what information is collected and why.',
  },
  {
    title: 'Confidentiality',
    body: 'Confidentiality is a core value of our care and our website. Personal information shared through consultations, forms or phone calls is handled with privacy. Our future backend will follow the same commitment.',
  },
  {
    title: 'Cookies and Analytics',
    body: 'This placeholder policy may be updated to describe any cookies or analytics tools used on the live website. You will always be told before non-essential tracking begins.',
  },
  {
    title: 'Third-Party Services',
    body: 'Where third-party services (such as map embeds, fonts or form providers) are used, their own privacy policies apply. We will list them here once the site goes live.',
  },
  {
    title: 'Contact',
    body: 'If you have questions about this policy or about how your information is handled, please contact us through the contact page.',
  },
]

export default function PrivacyPolicy() {
  useSEO(pageMeta['/privacy-policy'])

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Placeholder section — to be replaced with your complete, legally reviewed privacy policy."
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
