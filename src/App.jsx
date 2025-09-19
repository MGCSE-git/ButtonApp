import { useState } from 'react'

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
