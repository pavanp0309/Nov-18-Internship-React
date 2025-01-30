import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg p-3 border">
  <div className="container-fluid">
    <NavLink className="navbar-brand fw-bold fs-3 " to='/' >CryptoAdda</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to='/' >Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link " to='/about' >About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link " to='/markets' >Markets</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link " to='/blog' >Blog</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link " to='/contact'>Contact</NavLink>
        </li>

      </ul>
      {/* login authentications */}
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <NavLink className="btn btn-outline-success px-3 rounded-pill" to='' >Getstarted</NavLink>
      </li>
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar
