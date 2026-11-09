import React, { useEffect, useState } from 'react'
import './Header.css'

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'beyond-code', label: 'Beyond Code' },
  { id: 'contact', label: 'Contact' }
]

function Header() {
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  // Highlight the nav link for the section currently in view.
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="header">
      <nav className="nav" aria-label="Main">
        <a href="#top" className="logo">Liza Trundle</a>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span /><span /><span />
        </button>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {links.map(l => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={active === l.id ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="nav-resume">
            <a href="/Resume2026.pdf" download="Liza_Trundle_Resume_2026.pdf" onClick={() => setMenuOpen(false)}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
