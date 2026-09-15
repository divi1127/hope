import Hero from '../components/sections/Hero'
import Trust from '../components/sections/Trust'
import AboutPreview from '../components/sections/AboutPreview'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import ProgramSelector from '../components/sections/ProgramSelector'
import RecoveryPrograms from '../components/sections/RecoveryPrograms'
import HowRecoveryWorks from '../components/sections/HowRecoveryWorks'
import FacilitiesPreview from '../components/sections/FacilitiesPreview'
import HolisticWellness from '../components/sections/HolisticWellness'
import CounsellingPreview from '../components/sections/CounsellingPreview'
import FamilySupportPreview from '../components/sections/FamilySupportPreview'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import BlogPreview from '../components/sections/BlogPreview'
import CTASection from '../components/sections/CTASection'
import { pageMeta } from '../utils/seo'
import { useSEO } from '../hooks/useSEO'

export default function Home() {
  useSEO(pageMeta['/'])

  return (
    <>
      <Hero />
      <Trust />
      <AboutPreview />
      <WhyChooseUs />
      <ProgramSelector />
      <RecoveryPrograms />
      <HowRecoveryWorks />
      <FacilitiesPreview />
      <HolisticWellness />
      <CounsellingPreview />
      <FamilySupportPreview />
      <TestimonialsSection />
      <BlogPreview />
      <CTASection />
    </>
  )
}