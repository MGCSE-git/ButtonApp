import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonDesign from './components/ButtonDesign'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ButtonDesign/>
    </>
  )
}

export default App
