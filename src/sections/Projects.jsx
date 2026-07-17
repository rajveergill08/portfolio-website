import { motion } from 'framer-motion'
import projects from '../data/projects'
import Reveal from '../components/Reveal'

function GitHubIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.7-1.6 6.7-7.3a5.7 5.7 0 0 0-1.5-3.9A5.3 5.3 0 0 0 19.1 0S17.9-.4 15 1.5a13.4 13.4 0 0 0-6 0C6.1-.4 4.9 0 4.9 0a5.3 5.3 0 0 0-.1 3.3 5.7 5.7 0 0 0-1.5 3.9c0 5.7 3.4 6.9 6.7 7.3A4.8 4.8 0 0 0 9 18v4" /></svg>
}

function ProjectLink({ href, children, className }) {
  if (!href) return <span className={`${className} is-disabled`} aria-disabled="true" title="Project link coming soon">{children}</span>
  return <motion.a whileHover={{ y: -2 }} whileTap={{ scale: .97 }} className={className} href={href} target="_blank" rel="noreferrer">{children}</motion.a>
}

function Projects() {
  return (
    <section className="work-section section-pad" id="work">
      <Reveal className="projects-header">
        <div><p className="section-kicker">Selected projects</p><h2>Things I’ve designed<br />and <span>built.</span></h2></div>
        <p>A collection of full stack products and frontend experiences shaped around useful problems, clear interfaces, and reliable code.</p>
      </Reveal>

      <div className="modern-project-grid">
        {projects.map((project, index) => (
          <motion.article className="modern-project-card" key={project.title} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .6, delay: index * .1 }} whileHover={{ y: -9 }}>
            <div className="modern-project-copy">
              <div className="project-card-number">{project.number}</div><p className="project-type">{project.type}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p>
              <div className="project-tech">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
              <div className="project-actions"><ProjectLink href={project.github} className="github-button"><GitHubIcon /> GitHub</ProjectLink></div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Projects
