import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './component/Navigation'
import Hero from './component/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation/>
      <Hero/>
    </>
  )
}

export default App
