import { motion } from 'framer-motion'
import skills from '../data/skills'
import Reveal from '../components/Reveal'

function Skills() {
  return (
    <section className="skills-section section-pad" id="skills">
      <Reveal className="skills-header">
        <div><p className="section-kicker">Technical toolkit</p><h2>Skills that turn ideas<br />into <span>products.</span></h2></div>
        <p>A growing toolkit for building responsive interfaces, reliable backend systems, and complete modern web applications.</p>
      </Reveal>

      <div className="skills-category-grid">
        {skills.map((category, categoryIndex) => (
          <motion.article className="skill-category-card" key={category.category} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .55, delay: categoryIndex * .07 }} whileHover={{ y: -7 }}>
            <div className="skill-card-heading"><span>{category.number}</span><div><h3>{category.category}</h3><p>{category.description}</p></div></div>
            <div className="skill-meter-list">
              {category.skills.map((skill) => (
                <div className="skill-meter" key={skill.name}>
                  <div className="skill-meta"><i aria-hidden="true">{skill.icon}</i><strong>{skill.name}</strong></div>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Skills
