import React from 'react'
import { Outlet ,NavLink} from 'react-router-dom'

const Shop = () => {
  return (
    <div className='text-center'>
      <div className='d-flex justify-content-center'>
           <NavLink className="nav-link mx-3  fw-bold fs-2 text-danger" to='/shop/featured'>Featured</NavLink>
           <NavLink className="nav-link fw-bold fs-2 text-success" to='/shop/trending'>Trending</NavLink>
      </div>
      <Outlet/>
    </div>
  )
}

export default Shop
