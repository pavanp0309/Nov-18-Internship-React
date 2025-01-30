import React from 'react'
import NavBar from '../components/common/NavBar'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/ContactUs'
import LiveMarkets from '../pages/LiveMarkerts'
import Blog from '../pages/Blog'

const AppRoutes = () => {
  return (
    <>
      <NavBar/>
      <Routes >
        <Route  path='/' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/markets' element={<LiveMarkets/>}/>
        <Route  path='/contact' element={<Contact/>}/>
        <Route  path='/blog' element={<Blog/>}/>
      </Routes>
      
    </>
  )
}

export default AppRoutes
