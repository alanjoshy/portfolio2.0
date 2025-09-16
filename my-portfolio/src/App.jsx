import React from 'react'
import Header from './components/Header'
import Index from './pages/Index'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Index />
      <About />
      <Experience />
      <Projects />
      <ContactMe />
    </div>
  )
}

export default App
