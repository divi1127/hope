import ProgramDetail from '../components/common/ProgramDetail'
import { womenProgramSections } from '../data/programs'
import { pageMeta } from '../utils/seo'

const overviewPoints = [
  'A private, respectful and safe environment',
  'Confidential one-on-one counselling',
  'Emotional wellness and self-care practices',
  'Fitness and wellness activities at your pace',
  'Family support where requested',
  'Personalised aftercare planning',
]

export default function WomenProgram() {
  return (
    <ProgramDetail
      seoMeta={pageMeta['/programs/women']}
      heroEyebrow="Women's Program"
      heroTitle="Women's Recovery Program"
      heroSubtitle="A supportive, private and respectful environment designed around your individual recovery journey."
      overview={{
        title: 'Designed Around Your Journey',
        text: 'The women\u2019s program creates a calm, private space where each woman is met as an individual. Care is personal: counselling, emotional wellness and therapy are shaped around your goals and pace, with family involvement only where you wish. The environment is one of safety, understanding and quiet empowerment.',
        image: '/images/womens-program.svg',
        alt: 'Private and supportive women\u2019s recovery environment at Hope',
        points: overviewPoints,
      }}
      sections={womenProgramSections}
      ctaButtonText="Request a Confidential Consultation"
      ctaButtonTo="/appointment"
    />
  )
}