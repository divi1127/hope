import RecoveryDetailPage from '../components/common/RecoveryDetailPage'
import { pageMeta } from '../utils/seo'

const sections = [
  {
    title: 'Understanding Substance Dependence',
    description:
      'A clear, non-judgmental understanding of substance dependence and its effects on the person and those who care about them.',
  },
  {
    title: 'Assessment',
    description:
      'A confidential assessment that shapes a recovery plan around your specific history and goals.',
  },
  {
    title: 'Structured Support',
    description:
      'A calm, structured environment with clear daily routines that support early recovery.',
  },
  {
    title: 'Counselling',
    description:
      'One-on-one counselling that addresses underlying concerns in a safe, private space.',
  },
  {
    title: 'Behavioural Therapy',
    description:
      'Evidence-informed approaches that help change habits, thoughts and responses to triggers.',
  },
  {
    title: 'Family Support',
    description:
      'Helping families understand and support the recovery journey in healthy ways.',
  },
  {
    title: 'Relapse Prevention',
    description:
      'Practical planning to recognise warning signs and respond with confidence.',
  },
  {
    title: 'Continuing Care',
    description:
      'Aftercare and follow-up support that continues long after the program.',
  },
]

export default function DrugRecovery() {
  return (
    <RecoveryDetailPage
      seoMeta={pageMeta['/recovery/drugs']}
      heroEyebrow="Recovery"
      heroTitle="Drug Recovery"
      heroSubtitle="Structured, compassionate care for substance dependence — confidential, professional and built around you."
      introImage="/images/drug-recovery.svg"
      introAlt="Structured recovery space at Hope"
      sections={sections}
      ctaButtonText="Speak Confidentially With Our Team"
    />
  )
}