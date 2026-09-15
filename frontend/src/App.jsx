import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import FloatingActions from './components/layout/FloatingActions'
import ScrollProgress from './components/layout/ScrollProgress'
import LoadingScreen from './components/layout/LoadingScreen'
import CustomCursor from './components/layout/CustomCursor'
import ScrollToTop from './components/common/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import MenProgram from './pages/MenProgram'
import WomenProgram from './pages/WomenProgram'
import Recovery from './pages/Recovery'
import AlcoholRecovery from './pages/AlcoholRecovery'
import DrugRecovery from './pages/DrugRecovery'
import SmokingRecovery from './pages/SmokingRecovery'
import Counselling from './pages/Counselling'
import Therapy from './pages/Therapy'
import FamilySupport from './pages/FamilySupport'
import Rehabilitation from './pages/Rehabilitation'
import Facilities from './pages/Facilities'
import Gallery from './pages/Gallery'
import Team from './pages/Team'
import Testimonials from './pages/Testimonials'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import FAQs from './pages/FAQs'
import Appointment from './pages/Appointment'
import Contact from './pages/Contact'
import EmergencyHelp from './pages/EmergencyHelp'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 16, scale: 0.995 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.995 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/men" element={<MenProgram />} />
          <Route path="/programs/women" element={<WomenProgram />} />
          <Route path="/recovery" element={<Recovery />} />
          <Route path="/recovery/alcohol" element={<AlcoholRecovery />} />
          <Route path="/recovery/drugs" element={<DrugRecovery />} />
          <Route path="/recovery/smoking" element={<SmokingRecovery />} />
          <Route path="/counselling" element={<Counselling />} />
          <Route path="/therapy" element={<Therapy />} />
          <Route path="/family-support" element={<FamilySupport />} />
          <Route path="/rehabilitation" element={<Rehabilitation />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/faq" element={<FAQs />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/emergency-help" element={<EmergencyHelp />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <LoadingScreen />
      <ScrollProgress />
      <ScrollToTop />
      <CustomCursor />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <AnimatedRoutes />
      </main>
      <Footer />
      <FloatingActions />
    </BrowserRouter>
  )
}