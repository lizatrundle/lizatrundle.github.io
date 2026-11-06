import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Work from './components/Work'
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
        <Experience />
        <Work />
        <Projects />
        <Education />
        <BeyondCode />
        <Contact />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Liza Trundle</p>
      </footer>
    </div>
  )
}

export default App

