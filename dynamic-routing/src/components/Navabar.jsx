import React from 'react'
import { NavLink } from 'react-router-dom'

const Navabar = () => {
  return ( 
    <nav className="navbar navbar-expand-sm ">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to='/'>Dynamic-Routes</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          {/* home page */}
          <li className="nav-item">
            <NavLink className="nav-link " to='/'>Home</NavLink>
          </li>
          {/* about page */}
          <li className="nav-item">
            <NavLink className="nav-link " to='/about'>About</NavLink>
          </li>
          {/* shop page */}
          <li className="nav-item">
            <NavLink className="nav-link " to='/shop'>shop</NavLink>
          </li>

        </ul>

        <button className='btn btn-outline-success rounded-pill px-3 '>getstarted</button>
 
      </div>
    </div>
  </nav>
  )
}

export default Navabar
