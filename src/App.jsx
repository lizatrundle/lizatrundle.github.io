import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import BeyondCode from './components/BeyondCode'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Education />
        <Experience />
        <Projects />
        <BeyondCode />
        <Contact />
      </main>
      <footer>
        <p>&copy; 2025 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

