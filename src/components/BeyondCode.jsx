import React from 'react'
import './BeyondCode.css'

function BeyondCode() {
  return (
    <section id="beyond-code" className="beyond-code">
      <div className="container">
        <h2>Beyond Code</h2>
        <p className="art-description">
          Beyond my career in software development, I am deeply passionate about art in all its forms. I have been creating art for as long as I can remember, exploring everything from painting and drawing to photography, ceramics, web design, video editing, cookie and cake decorating, and even nail art. This artistic background strengthens my software development work, allowing me to blend creative vision with technical expertise. My attention to detail and design thinking help me craft elegant code and beautiful user experiences.
        </p>
        <a href="https://lizatrundle.weebly.com/" target="_blank" rel="noopener noreferrer" className="art-portfolio-link">
          Check out my art portfolio →
        </a>
        
        <div className="hobbies-section">
          <h3>Hobbies & Interests</h3>
          <p className="hobbies-description">
            In my free time, I enjoy spending time with friends and family, getting outdoors, hiking, skiing, traveling, reading, going to the gym, going for walks, listening to music, watching movies, and exploring NYC and all it has to offer. 
            Check out my <a href="https://boxd.it/gkzc7" target="_blank" rel="noopener noreferrer" className="letterboxd-link">Letterboxd</a> to see what I've been watching, my <a href="https://www.goodreads.com/user/show/176595574-liza-trundle" target="_blank" rel="noopener noreferrer" className="letterboxd-link">Goodreads</a> to see what I've been reading, my <a href="https://open.spotify.com/user/lizatrundle?si=6da88368439a469b" target="_blank" rel="noopener noreferrer" className="letterboxd-link">Spotify</a> to see what I'm listening to, and my <a href="https://beliapp.com/" target="_blank" rel="noopener noreferrer" className="letterboxd-link">Beli</a> (@lizatrundle) to see what I've been eating!
          </p>
          <div className="hobbies-images">
            <img src="/image1.JPG" alt="Hobby image 1" className="hobby-image" />
            <img src="/image2.jpg" alt="Hobby image 2" className="hobby-image" />
            <img src="/image3.jpg" alt="Hobby image 3" className="hobby-image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BeyondCode

