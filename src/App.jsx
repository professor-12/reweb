import { useState } from 'react'
import './App.css'
import Header from './components/header'
import HeroSection from './components/hero-section'
import SectionTwo from './components/section-two'
import SectionThree from './components/section-three'
import Testimonial from './components/Testimonial'
import FAQ from './components/faq'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <HeroSection />
      <SectionTwo />
      <SectionThree />
      <Testimonial />
      <FAQ />
    </div>

  )
}

export default App
