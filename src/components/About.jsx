import React from 'react'
import './About.css'

const strengths = [
  {
    title: 'Embed with the people I build for',
    text: 'I work out what stakeholders are actually trying to do, not just what they complained about, and turn it into a small, clear scope I ship myself.'
  },
  {
    title: 'Own it end to end',
    text: 'Requirements, UX, architecture, build, release, and on-call, including UAT and production releases on AWS and Terraform.'
  },
  {
    title: 'Go beyond the ticket',
    text: "I take on work without being asked, fix what's confusing or cluttered, and stay thorough. When I review teammates' merge requests, I suggest changes and commit examples."
  },
  {
    title: 'Use AI to my advantage',
    text: 'I use agents to plan and phase large features and trace bugs, and I review everything, because I need to be able to explain and debug what I ship.'
  }
]

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <img src="/profile-photo.jpg" alt="Liza Trundle" className="profile-photo" />
        <h2>About Me</h2>
        <p className="intro">
          My name is Liza Trundle, and I'm a software developer currently working in New York City. Originally from Charlottesville, Virginia, I graduated from the University of Virginia in 2024 with a degree in Computer Science and a minor in Data Science, and I've spent the past two years as a full-stack software engineer building an internal AI platform and client-facing products. I approach software development with both creativity and dedication, and I'm at my best working directly with the people who use what I build: understanding the real problem, designing a solution, and owning it through release. I'm passionate about building technology that makes a real impact, and I thrive in collaborative environments where I can learn from others and contribute my own perspective. Please feel free to reach out—I'd love to connect!
        </p>

        <div className="cta-row">
          <a href="/Resume2026.pdf" download="Liza_Trundle_Resume_2026.pdf" className="resume-link primary">
            Download resume
          </a>
        </div>

        <h3 className="about-subhead">How I work</h3>
        <div className="strengths-grid">
          {strengths.map(s => (
            <div key={s.title} className="strength-card">
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
