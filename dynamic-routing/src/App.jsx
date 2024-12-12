import React from 'react'

import Home from './pages/Home'
import About from './pages/about'
import Shop from './pages/shop'
import PageNotFound from './pages/PageNotFound'
import FeaturedProducts from './pages/FeaturedProducts'
import TrendingProducts from './pages/TrendingProducts'
import UserDetails from './components/UserDetails'
import Navabar from './components/Navabar'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
   <>
   <Navabar/>
     <Routes>
      {/* static Routing */}
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/about/:id' element={<UserDetails/>}/>

       {/* nested Routing */}
       <Route path='/shop' element={<Shop/>}>
        <Route index element={<FeaturedProducts/>} />{/*index: these opens the featured products by default */}
        <Route path='featured' element={<FeaturedProducts/>} />
        <Route path='trending' element={<TrendingProducts/>} />
       </Route>
       <Route path='*' element={<PageNotFound/>}/>
     </Routes>
   </>
  )
}

export default App
