import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'

const highlights = [
  { number: '01', icon: '</>', title: 'Web Development', text: 'Building fast, accessible web experiences with modern JavaScript and clean, maintainable architecture.', tags: ['JavaScript', 'Web Apps'] },
  { number: '02', icon: '⚛', title: 'React.js', text: 'Creating reusable components and responsive interfaces that feel polished across every screen size.', tags: ['React.js', 'Responsive UI'] },
  { number: '03', icon: '↔', title: 'Full Stack Development', text: 'Connecting frontend experiences to reliable backend services, databases, and well-structured REST APIs.', tags: ['Node.js', 'REST APIs'] },
  { number: '04', icon: '✦', title: 'Problem Solving', text: 'Breaking complex challenges into clear steps and delivering practical, thoughtful software solutions.', tags: ['Logic', 'Clean Code'] },
]

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (index) => ({ opacity: 1, y: 0, transition: { duration: .55, delay: index * .1, ease: [0.22, 1, 0.36, 1] } }),
}

function About() {
  return (
    <section className="about-section section-pad" id="about">
      <Reveal className="about-header">
        <div><p className="section-kicker">About me</p><h2>Driven by curiosity.<br /><span>Built through code.</span></h2></div>
        <p className="about-summary">I’m a Computer Science student and full stack developer focused on creating modern, responsive web applications. I enjoy turning ideas into intuitive interfaces with React.js and building dependable backend systems using Node.js, Express.js, MongoDB, and REST APIs.</p>
      </Reveal>

      <motion.div className="about-card-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }}>
        {highlights.map((item, index) => (
          <motion.article className="about-info-card" key={item.title} custom={index} variants={cardVariants} whileHover={{ y: -8, transition: { duration: .25 } }}>
            <div className="about-card-top"><span>{item.number}</span><i>{item.icon}</i></div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <div className="about-card-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </motion.article>
        ))}
      </motion.div>

      <Reveal className="about-principle"><span>My approach</span><p>Understand the problem <i>→</i> design with purpose <i>→</i> build with care <i>→</i> improve through feedback.</p></Reveal>
    </section>
  )
}

export default About
