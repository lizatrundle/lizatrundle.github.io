import React from 'react'
import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <img src="/profile-photo.jpg" alt="Liza Trundle" className="profile-photo" />
        <h2>About Me</h2>
        <p className="intro">
          Hi! My name is Elizabeth (Liza) Trundle and I am a software developer currently working in New York City. I graduated from the University of Virginia in 2024 with a degree in Computer Science and Data Science. I bring creativity and dedication to solving complex technical challenges. Originally from Charlottesville, Virginia, I'm passionate about leveraging technology to build innovative solutions. Please feel free to reach out—I'd love to connect!
        </p>
        <a href="/Resume2025.pdf" download="Liza_Trundle_Resume_2025.pdf" className="resume-link">
          Download My Resume →
        </a>
      </div>
    </section>
  )
}

export default About
