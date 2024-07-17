import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactFormHook from './components/ReactFormHook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ReactFormHook/>
    </>
  )
}

export default App
