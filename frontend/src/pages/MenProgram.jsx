import ProgramDetail from '../components/common/ProgramDetail'
import { menProgramSections } from '../data/programs'
import { pageMeta } from '../utils/seo'

const overviewPoints = [
  'Professional counselling in a confidential space',
  'Structured daily routine and wellness activities',
  'Medical and therapeutic support where appropriate',
  'Peer support within the men\u2019s program',
  'Family involvement where requested',
  'A clear aftercare plan before completion',
]

export default function MenProgram() {
  return (
    <ProgramDetail
      seoMeta={pageMeta['/programs/men']}
      heroEyebrow="Men's Program"
      heroTitle="Men's Recovery Program"
      heroSubtitle="A structured and supportive environment tailored to your recovery needs and personal goals."
      overview={{
        title: 'A Supportive Space to Rebuild',
        text: 'The men\u2019s program combines professional care, structured routine and personal development. It is built around respect and individual needs — never assumptions. Men at Hope work with counsellors and therapists to understand their journey, build practical life skills and move forward at their own pace.',
        image: '/images/mens-program.svg',
        alt: 'Structured men\u2019s recovery environment at Hope',
        points: overviewPoints,
      }}
      sections={menProgramSections}
      ctaButtonText="Talk to Our Counsellor"
      ctaButtonTo="/appointment"
    />
  )
}