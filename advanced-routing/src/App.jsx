import React, { Suspense } from 'react'
import Navbar from "./components/Navbar"
// import Home from "./pages/Home" 
// import About from "./pages/About"
// import Contact from "./pages/Contact"
// import Products  from "./pages/Products"
import { Routes,Route, } from 'react-router-dom'
// import PrivateRoute from './pages/PrivateRoute'
// import PageNotFound from './pages/PageNotFound'

let Home=React.lazy(()=>import("./pages/Home"))
let About=React.lazy(()=>import("./pages/About"))
let Contact=React.lazy(()=>import("./pages/Contact"))
let Products=React.lazy(()=>import("./pages/Products"))
let PageNotFound=React.lazy(()=>import("./pages/PageNotFound"))
let PrivateRoute=React.lazy(()=>import("./pages/PrivateRoute"))
let Login=React.lazy(()=>import("./Login"))

const App = () => {
  return (
    <>
  
    {/* navbar component */}
      <Navbar/>
    {/* Routing setup for the app */}
   <Suspense fallback={<h1>loading....</h1>}>
   <Routes>{/* it will ensure there is only one route that matches the path is rendered in ui */}
     <Route path='/' element={<Home/>} />
     <Route path="/about"  element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/products" element={<PrivateRoute>
      <Products/>
     </PrivateRoute>}/>
     <Route path="*" element={<PageNotFound/>}/>
    </Routes>
   </Suspense>
    </>
  )
}

export default App
