import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

function Loader() {
  const [visible, setVisible] = useState(true)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), reduceMotion ? 250 : 1250)
    return () => window.clearTimeout(timer)
  }, [reduceMotion])

  return (
    <AnimatePresence>
      {visible && <motion.div className="loader premium-loader" role="status" aria-label="Loading Rajveer's portfolio" exit={{ opacity: 0, y: -15 }} transition={{ duration: .5, ease: [0.22, 1, 0.36, 1] }}>
        <div className="loader-mark">
          <motion.i className="loader-ring ring-outer" animate={reduceMotion ? {} : { rotate: 360 }} transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }} />
          <motion.i className="loader-ring ring-inner" animate={reduceMotion ? {} : { rotate: -360 }} transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }} />
          <motion.strong initial={{ opacity: 0, scale: .75 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .45 }}>R<span>.</span></motion.strong>
        </div>
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 }}>Designing · Developing · Creating</motion.p>
        <div className="loader-track"><motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay: .15, ease: [0.22, 1, 0.36, 1] }} /></div>
      </motion.div>}
    </AnimatePresence>
  )
}

export default Loader
