import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Information</h2>
        <div className="contact-box">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Name</h3>
              <p>Liza Trundle</p>
            </div>
            <div className="contact-item">
              <h3>Email</h3>
              <a href="mailto:lizatrundle@gmail.com">lizatrundle@gmail.com</a>
            </div>
            <div className="contact-item">
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/lizatrundle/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/lizatrundle
              </a>
            </div>
            <div className="contact-item">
              <h3>Github</h3>
              <a href="https://github.com/lizatrundle" target="_blank" rel="noopener noreferrer">
               github.com/lizatrundle
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

