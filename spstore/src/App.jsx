import React from 'react'
import Navbar from './components/Navbar'
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ProductDetails from  "./pages/ProductDetails"
import Shop from "./pages/Shop"
import ProductNotFound from './pages/ProductNotFound'
import Cart from "./components/Cart"
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar/>
    <div className='container my-2'>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/shop' element={<Shop/>} />
        <Route  path='/shop/:id' element={<ProductDetails/>} />
        <Route  path='/contact' element={<Contact/>} />
        <Route  path='/about' element={<About/>} />
        <Route  path='/cart' element={<Cart/>} />
        <Route  path='*' element={<ProductNotFound/>} />
      </Routes>

    </div>
    </>
  )
}

export default App
