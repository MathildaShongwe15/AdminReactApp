import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import {Register2} from '../Register'



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Register">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>

    <main>
      <Routes>
        <Route path="/Register" element={<Register2 />} />
      </Routes>
    </main>
  </BrowserRouter>

  )
}

export default App
