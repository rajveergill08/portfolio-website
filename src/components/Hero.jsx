import { motion } from 'framer-motion'
import profilePhoto from '../assets/profile.png'

function Hero() {
  const githubUrl = import.meta.env.VITE_GITHUB_URL || 'https://github.com/rajveergill08'
  const linkedInUrl = import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/rajveer-gill-0bba13369'
  const email = import.meta.env.VITE_CONTACT_EMAIL || 'grajveer260@gmail.com'
  const phone = import.meta.env.VITE_CONTACT_PHONE || '+91 8200133974'

  return (
    <section className="hero-section section-pad" id="home">
      <div className="hero-glow hero-glow-one" /><div className="hero-glow hero-glow-two" />
      <div className="hero-layout">
        <motion.div className="hero-copy" initial={{ opacity: 0, x: -35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .7, ease: [0.22, 1, 0.36, 1] }}>
          <h1 className="hero-name">Rajveer Singh<br /><span>Gill</span></h1>
          <div className="hero-roles hero-role-headline"><strong>Frontend Developer | React.js Developer | Data Analyst Enthusiast</strong></div>
          <p className="hero-description">Computer Science student passionate about building responsive web applications and data-driven solutions.</p>
          <div className="hero-actions">
            <motion.a whileHover={{ y: -4 }} whileTap={{ scale: .97 }} className="primary-button" href="#work"><span>↓</span> View Projects</motion.a>
            <motion.a whileHover={{ y: -4 }} whileTap={{ scale: .97 }} className="secondary-button" href="/resume.pdf" download="Rajveer-Singh-Gill-Resume.pdf"><span>♨</span> Download Resume</motion.a>
            <motion.a whileHover={{ y: -4 }} whileTap={{ scale: .97 }} className="text-button" href={`mailto:${email}`}><span>✉</span> Email Me</motion.a>
          </div>
          <div className="hero-contact-chips">
            <a href={githubUrl} target="_blank" rel="noreferrer"><i>&lt;/&gt;</i> GitHub</a>
            <a href={linkedInUrl} target="_blank" rel="noreferrer"><i>▣</i> LinkedIn</a>
            <a href={`tel:${phone}`}><i>●</i> {phone}</a>
            <span><i>●</i> Ahmedabad, Gujarat, India</span>
          </div>
          <div className="hero-highlights" aria-label="Portfolio highlights"><div><strong>2027</strong><span>B.Tech CSE Graduation</span></div><div><strong>4+</strong><span>Featured Projects</span></div><div><strong>5</strong><span>Skill Categories</span></div></div>
          <div className="hero-social-links">
            <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
            <a href={linkedInUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
            <a href={`mailto:${email}`} aria-label="Email">✉</a>
          </div>
        </motion.div>

        <motion.div className="portrait-stage professional-profile-card" initial={{ opacity: 0, scale: .88, x: 35 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: .9, delay: .85, ease: [0.22, 1, 0.36, 1] }}>
          <motion.div className="professional-photo-frame" animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
            <img src={profilePhoto} alt="Rajveer Singh Gill, full stack developer" width="800" height="800" decoding="async" fetchPriority="high" />
          </motion.div>
          <div className="professional-profile-info">
            <div><strong>Rajveer Singh Gill</strong><span>Software Developer</span></div>
            <div className="profile-availability"><i /> Available to Work</div>
          </div>
          <p className="profile-statement">I enjoy turning ideas into simple, responsive, and useful web experiences.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
