import { motion } from 'framer-motion'

function SocialIcon({ name }) {
  return name === 'github'
    ? <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.7-1.6 6.7-7.3a5.7 5.7 0 0 0-1.5-3.9A5.3 5.3 0 0 0 19.1 0S17.9-.4 15 1.5a13.4 13.4 0 0 0-6 0C6.1-.4 4.9 0 4.9 0a5.3 5.3 0 0 0-.1 3.3 5.7 5.7 0 0 0-1.5 3.9c0 5.7 3.4 6.9 6.7 7.3A4.8 4.8 0 0 0 9 18v4" /></svg>
    : <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><path d="M2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
}

function Footer() {
  const githubUrl = import.meta.env.VITE_GITHUB_URL || 'https://github.com/rajveergill08'
  const linkedInUrl = import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/in/rajveer-gill-0bba13369'
  const year = new Date().getFullYear()

  const socialLink = (label, href, icon) => href
    ? <motion.a className="footer-circle-link" whileHover={{ y: -3 }} whileTap={{ scale: .95 }} key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>{icon}</motion.a>
    : <span className="footer-circle-link footer-link-disabled" key={label} title={`${label} link is not configured`} aria-label={`${label} unavailable`}>{icon}</span>

  return (
    <footer className="premium-footer">
      <div className="simple-footer-inner">
        <p>Designed and Developed by Rajveer Singh Gill © {year}</p>
        <div className="simple-footer-links">
          {socialLink('GitHub', githubUrl, <SocialIcon name="github" />)}
          {socialLink('LinkedIn', linkedInUrl, <SocialIcon name="linkedin" />)}
          <motion.a className="footer-circle-link" href="#home" aria-label="Back to top" whileHover={{ y: -3 }} whileTap={{ scale: .95 }}>↑</motion.a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
