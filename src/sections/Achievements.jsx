import { motion } from 'framer-motion'
import achievements from '../data/achievements'
import Reveal from '../components/Reveal'

function Achievements() {
  return (
    <section className="achievements-section section-pad" id="achievements">
      <Reveal className="achievements-header">
        <div><p className="section-kicker">Highlights</p><h2>Milestones along<br /><span>the journey.</span></h2></div>
        <p>Progress shaped by building real projects, strengthening full stack skills, and continuously learning through education and practical experience.</p>
      </Reveal>

      <div className="achievement-card-grid">
        {achievements.map((achievement, index) => (
          <motion.article className={`achievement-card achievement-${achievement.accent}`} key={achievement.id} initial={{ opacity: 0, y: 30, scale: .98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .55, delay: index * .1 }} whileHover={{ y: -9 }}>
            <div className="achievement-icon" aria-hidden="true">{achievement.icon}</div>
            <div className="achievement-index">{String(index + 1).padStart(2, '0')}</div>
            <div className="achievement-card-copy"><p>{achievement.eyebrow}</p><h3>{achievement.title}</h3><span>{achievement.description}</span></div>
            <motion.i className="achievement-arrow" aria-hidden="true" whileHover={{ x: 3, y: -3 }}>↗</motion.i>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Achievements
