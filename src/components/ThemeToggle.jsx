import { useEffect, useState } from 'react'

function getInitialTheme() {
  const savedTheme = window.localStorage.getItem('portfolio-theme')
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)
  const dark = theme === 'dark'

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  return (
    <button className="theme-toggle" type="button" onClick={() => setTheme(dark ? 'light' : 'dark')} aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`} aria-pressed={dark} title={`Use ${dark ? 'light' : 'dark'} theme`}>
      <span aria-hidden="true">{dark ? '☀' : '◐'}</span>
    </button>
  )
}

export default ThemeToggle
