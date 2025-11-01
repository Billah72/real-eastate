import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import About from './components/About.jsx'

function App() {
  return (
    <div className='w-full overflow-hidden '>
      <Header />
      <About/>
    </div>
  )
}

export default App
