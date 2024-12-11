import React from 'react'
import styles from "../components/Navbar.module.css"
import { Link,NavLink } from 'react-router'

const Navbar = () => {

  return (
    <nav className={styles.navbar}>
      <div className='brand'>Routing</div>
      {/*Navigation Links  */}
      <ul className={styles.Navlinks}>
        <li className={styles.navitem}><NavLink to="/">Home</NavLink></li>
        <li className={styles.navitem}><NavLink to="/about">About</NavLink></li>
        <li className={styles.navitem}><NavLink to="/services">services</NavLink></li>
        <li className={styles.navitem}><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      {/* get started button */}
      <button className={styles.btn}>GetStarted</button>
    </nav>
  )
}

export default Navbar
