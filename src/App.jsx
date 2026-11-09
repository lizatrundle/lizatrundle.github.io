import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Reveal from './components/Reveal'
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
        <Hero />
        <Reveal><About /></Reveal>
        <Reveal><Experience /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><Education /></Reveal>
        <Reveal><BeyondCode /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Liza Trundle</p>
      </footer>
    </div>
  )
}

export default App

