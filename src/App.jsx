import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contract from './components/Contract.jsx'

function App() {
  return (
    <div className='w-full overflow-hidden '>
      <Header />
      <About/>
      <Projects/>
      <Testimonials/>
      <Contract/>
    </div>
  )
}

export default App