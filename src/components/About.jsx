import React from 'react'
import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <img src="/profile-photo.jpg" alt="Liza Trundle" className="profile-photo" />
        <h2>About Me</h2>
        <p className="intro">
        Hi! My name is Elizabeth (Liza) Trundle, and I'm a software developer currently working in New York City. Originally from Charlottesville, Virginia, I graduated from the University of Virginia in 2024 with a degree in Computer Science and Data Science.
        I approach software development with both creativity and dedication, whether I'm designing elegant solutions or tackling complex technical challenges. I'm passionate about building technology that makes a real impact, 
        and I thrive in collaborative environments where I can learn from others and contribute my own perspective. Please feel free to reach out—I'd love to connect!
        </p>
        <a href="/Resume2025.pdf" download="Liza_Trundle_Resume_2025.pdf" className="resume-link">
          Download My Resume →
        </a>
      </div>
    </section>
  )
}

export default About
