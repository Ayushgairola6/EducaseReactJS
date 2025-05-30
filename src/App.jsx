import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/LoginPage'
import Dashboard from './pages/DashBoard'
import Register from './pages/Register'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path="/DashBoard" element={<Dashboard />} />
          <Route path="/Register"  element={ <Register/>}/>
        </Routes>

      </Router>
    </>
  )
}

export default App
