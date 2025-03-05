import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { StoreContextProvider } from './Context/Context'
import Navbar from './Component/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <StoreContextProvider>
    <Navbar/>
    </StoreContextProvider>
    </>
  )
}

export default App
