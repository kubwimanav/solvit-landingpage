import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter } from "react-router-dom";
import './App.css'
import Landing from './components/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Landing/>
    </BrowserRouter>
  )
}

export default App
