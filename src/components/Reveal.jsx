import { motion, useReducedMotion } from 'framer-motion'

function Reveal({ children, className = '', delay = 0, as = 'div' }) {
  const reduceMotion = useReducedMotion()
  const Component = motion[as]

  return (
    <Component
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  )
}

export default Reveal
