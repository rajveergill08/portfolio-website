import { motion } from 'framer-motion'
import certifications from '../data/certifications'
import Reveal from '../components/Reveal'

function Certifications() {
  return (
    <section className="timeline-section certifications-section section-pad" id="certifications">
      <Reveal className="timeline-header"><p className="section-kicker">Credentials</p><h2>Learning beyond<br /><span>the classroom.</span></h2></Reveal>
      <div className="vertical-timeline">
        <motion.div className="timeline-progress" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }} />
        {certifications.map((item, index) => <motion.article className="timeline-entry" key={item.id} initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .6, delay: index * .12 }}><div className="timeline-dot"><span>{item.icon}</span></div><div className="timeline-date">{item.type}</div><motion.div className="timeline-card" whileHover={{ x: 7 }}><div className="timeline-card-top"><span>Completed</span><i>{String(index + 1).padStart(2, '0')}</i></div><h3>{item.title}</h3><p>{item.description}</p></motion.div></motion.article>)}
      </div>
    </section>
  )
}

export default Certifications
