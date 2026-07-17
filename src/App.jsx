import { lazy, Suspense } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'

const Projects = lazy(() => import('./sections/Projects'))
const About = lazy(() => import('./sections/About'))
const Skills = lazy(() => import('./sections/Skills'))
const Certifications = lazy(() => import('./sections/Certifications'))
const Education = lazy(() => import('./sections/Education'))
const Achievements = lazy(() => import('./sections/Achievements'))
const Contact = lazy(() => import('./sections/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function SectionTransition({ children }) {
  const reduceMotion = useReducedMotion()
  return <motion.div className="section-transition" initial={reduceMotion ? false : { opacity: 0, y: 42, scale: .99 }} whileInView={reduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: .04 }} transition={{ duration: .75, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}

function SectionFallback() {
  return <div className="section-fallback" role="status"><span className="sr-only">Loading portfolio section</span></div>
}

function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Loader />
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <SectionTransition><Projects /></SectionTransition>
          <SectionTransition><About /></SectionTransition>
          <SectionTransition><Skills /></SectionTransition>
          <SectionTransition><Certifications /></SectionTransition>
          <SectionTransition><Education /></SectionTransition>
          <SectionTransition><Achievements /></SectionTransition>
          <SectionTransition><Contact /></SectionTransition>
        </Suspense>
      </main>
      <Suspense fallback={null}><Footer /></Suspense>
    </div>
  )
}

export default App
