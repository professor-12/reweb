import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[hsl(var(--background))] w-full h-[100vh]'>
      <h1 className='text-white  font-[family-name:var(--font-heading)] text-xl'>Hello world</h1>
      <h1 className='text-white font-[var(--font-geist-sans)] text-xl'>Hello world</h1>
    </div>

  )
}

export default App
