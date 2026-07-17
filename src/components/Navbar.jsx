import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { label: 'Home', id: 'home' }, { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' }, { label: 'Projects', id: 'work' },
  { label: 'Certifications', id: 'certifications' }, { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
      const marker = window.scrollY + Math.min(window.innerHeight * .35, 280)
      let current = 'home'
      navItems.forEach(({ id }) => {
        const section = document.getElementById(id)
        if (section && section.offsetTop <= marker) current = id
      })
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = 'contact'
      setActiveSection(current)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    const closeOnEscape = (event) => event.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', closeOnEscape)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', closeOnEscape) }
  }, [menuOpen])

  const navLink = ({ label, id }, mobile = false) => <a key={id} className={activeSection === id ? 'nav-link active' : 'nav-link'} href={`#${id}`} aria-current={activeSection === id ? 'page' : undefined} onClick={() => { setActiveSection(id); setMenuOpen(false) }}><span>{label}</span>{!mobile && activeSection === id && <motion.i className="active-indicator" layoutId="nav-active" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}</a>

  return (
    <motion.header className={`nav-wrap${scrolled ? ' is-scrolled' : ''}`} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .7 }}>
      <a className="brand brand-monogram" href="#home" aria-label="Rajveer Singh Gill — Home" onClick={() => setMenuOpen(false)}><span>RR</span></a>
      <nav className="nav-links desktop-nav" aria-label="Main navigation">{navItems.map((item) => navLink(item))}</nav>
      <div className="nav-actions"><ThemeToggle /><button className={menuOpen ? 'menu-button is-open' : 'menu-button'} type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen((open) => !open)}><span /><span /></button></div>
      <AnimatePresence>{menuOpen && <motion.nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" initial={{ opacity: 0, y: -12, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -12, scale: .98 }} transition={{ duration: .22 }}>{navItems.map((item, index) => <motion.div key={item.id} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .035 }}>{navLink(item, true)}</motion.div>)}</motion.nav>}</AnimatePresence>
    </motion.header>
  )
}

export default Navbar
