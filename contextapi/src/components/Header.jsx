import { useContext } from 'react'
import Amazon from '../store/Store'


const Header = () => {
    let {isDark,toggleTheme}=useContext(Amazon)
  return (
    <div className={isDark?"light":"dark"} id='header'>
      <button onClick={toggleTheme}>{isDark?"light":"dark"}</button>
    </div>
  )
}

export default Header
