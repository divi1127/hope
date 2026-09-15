import RecoveryDetailPage from '../components/common/RecoveryDetailPage'
import { pageMeta } from '../utils/seo'

const sections = [
  {
    title: 'Smoking Cessation',
    description:
      'Structured support to help you reduce and stop smoking at a pace that feels manageable to you.',
  },
  {
    title: 'Behaviour Support',
    description:
      'Practical help identifying the habits and routines tied to smoking and finding healthier replacements.',
  },
  {
    title: 'Trigger Management',
    description:
      'Learning to recognise the moments and feelings that trigger the urge, and how to respond.',
  },
  {
    title: 'Lifestyle Changes',
    description:
      'Support around routine, activity and stress management that makes quitting more sustainable.',
  },
  {
    title: 'Counselling',
    description:
      'One-on-one counselling for the thoughts and stresses that often sit behind smoking.',
  },
  {
    title: 'Relapse Prevention',
    description:
      'Realistic planning to stay on track and respond kindly and wisely to setbacks.',
  },
]

export default function SmokingRecovery() {
  return (
    <RecoveryDetailPage
      seoMeta={pageMeta['/recovery/smoking']}
      heroEyebrow="Recovery"
      heroTitle="Smoking Cessation"
      heroSubtitle="A practical, kind approach to stopping smoking — with behaviour support, counselling and long-term planning."
      introImage="/images/smoking-recovery.svg"
      introAlt="Supportive environment for smoking cessation"
      sections={sections}
      ctaButtonText="Talk to Our Team"
    />
  )
}