import { useState } from 'react'
import Index from './components/pages/Index'
import './css/style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Index></Index>
    </>
  )
}

export default App
