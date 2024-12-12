import { BrowserRouter } from 'react-router-dom'
<BrowserRouter>
    <App />
</BrowserRouter>

step2:
import Home from './pages/Home'
import About from './pages/about'
import Shop from './pages/shop'
import Navabar from './components/Navabar'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
   <>
     <Routes>
      {/* static Routing */}
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/shop' element={<Shop/>}/>
     </Routes>
   </>
  )
}

export default App
