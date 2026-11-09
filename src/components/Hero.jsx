import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-chip">New York, NY · Software Developer II at FTI Consulting</p>
          <h1>Liza Trundle</h1>
          <p className="hero-tagline">
            Full-stack engineer building AI and client-facing products, from the first conversation to production.
          </p>
          <div className="hero-actions">
            <a href="/Resume2026.pdf" download="Liza_Trundle_Resume_2026.pdf" className="btn btn-primary">
              Download resume
            </a>
            <a href="#contact" className="btn btn-secondary">Get in touch</a>
          </div>
        </div>
        <div className="hero-photo">
          <img src="/profile-photo.jpg" alt="Liza Trundle" />
        </div>
      </div>
    </section>
  )
}

export default Hero
