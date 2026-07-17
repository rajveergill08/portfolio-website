import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const reduceMotion = useReducedMotion()
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 130, damping: 24, mass: .25 })

  return <motion.div className="progress" style={{ scaleX: reduceMotion ? scrollYProgress : smoothProgress }} aria-hidden="true" />
}

export default ScrollProgress
