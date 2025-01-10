import {useContext} from 'react'
import { UserCrenditials } from '../store/Store'

const Logout = () => {

    let {login,logout}=useContext(UserCrenditials)
  return (
    <div>
        
       <button onClick={()=>logout()}>Logout</button>
       <button onClick={()=>login()}>Login</button>
    </div>
  )
}

export default Logout
