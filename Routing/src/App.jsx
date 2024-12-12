import React from 'react'
import Home from "./pages/Home"
import Contact from "./pages/contact"
import Services from "./pages/services"
import About from "./pages/about"
import PageNotFoud from './pages/PageNotFound'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/services' element={<Services/>} />
      {/* navigating the user directly to 404 page when url is not correct */}
      <Route path='*' element={<PageNotFoud/>} />
    </Routes>
    </>
  )
}

export default App
