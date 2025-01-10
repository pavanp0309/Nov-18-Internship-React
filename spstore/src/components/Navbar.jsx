import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg border p-3">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to=''>SpFSstore</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor04" aria-controls="navbarColor04" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor04">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <NavLink className="nav-link active" to='/'>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to='/shop'>Shop</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to='/about'>About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to='/contact'>Contact</NavLink>
          </li>
      

        
        </ul>
        <form className="d-flex">
          <input className="form-control me-sm-2" type="search" placeholder="Search" />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
       {/* cart Links */}
        <ul className='navbar-nav ms-auto'>
        <li className="nav-item">
            <NavLink className="nav-link" to='/cart'>🛒</NavLink>
        </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
