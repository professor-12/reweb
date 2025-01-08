import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import HeroSection from './components/hero-section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <HeroSection />
    </div>

  )
}

export default App
