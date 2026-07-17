import { motion } from 'framer-motion'
import education from '../data/education'
import Reveal from '../components/Reveal'

function Education() {
  return (
    <section className="timeline-section education-section section-pad" id="education">
      <Reveal className="timeline-header"><p className="section-kicker">Academic foundation</p><h2>My education<br /><span>journey.</span></h2></Reveal>
      <div className="vertical-timeline">
        <motion.div className="timeline-progress" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} />
        {education.map((item, index) => <motion.article className="timeline-entry" key={item.id} initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .6, delay: index * .1 }}><div className="timeline-dot"><span>◆</span></div><div className="timeline-date">{item.period}</div><div className="timeline-card"><div className="timeline-card-top"><span>{item.status}</span><i>EDU</i></div><h3>{item.degree}</h3><h4>{item.institution}</h4><p>{item.description}</p></div></motion.article>)}
      </div>
    </section>
  )
}

export default Education
