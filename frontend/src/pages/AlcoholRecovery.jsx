import RecoveryDetailPage from '../components/common/RecoveryDetailPage'
import { pageMeta } from '../utils/seo'

const sections = [
  {
    title: 'Understanding Alcohol Dependence',
    description:
      'Recognising how alcohol dependence develops and its impact on health, relationships and daily life — without judgement.',
  },
  {
    title: 'Assessment',
    description:
      'A confidential assessment to understand your situation and build a plan that is genuinely individualised.',
  },
  {
    title: 'Counselling',
    description:
      'Regular one-on-one counselling to explore what lies behind the drinking and build healthier patterns.',
  },
  {
    title: 'Therapy',
    description:
      'Structured therapeutic approaches that support change in thoughts, habits and coping.',
  },
  {
    title: 'Lifestyle Support',
    description:
      'Practical support around routine, sleep, activity and nutrition that underpins sustainable recovery.',
  },
  {
    title: 'Family Involvement',
    description:
      'Helping families understand alcohol dependence and support recovery in a healthy way.',
  },
  {
    title: 'Relapse Prevention',
    description:
      'Realistic planning to recognise triggers and respond wisely during difficult moments.',
  },
  {
    title: 'Aftercare',
    description:
      'Continuing support after the program to protect and build on the progress made.',
  },
]

export default function AlcoholRecovery() {
  return (
    <RecoveryDetailPage
      seoMeta={pageMeta['/recovery/alcohol']}
      heroEyebrow="Recovery"
      heroTitle="Alcohol Recovery"
      heroSubtitle="Compassionate, structured support for alcohol dependence — from the first conversation to long-term aftercare."
      introImage="/images/alcohol-recovery.svg"
      introAlt="Supportive environment for alcohol recovery"
      sections={sections}
      ctaButtonText="Talk to Our Team"
    />
  )
}