import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    let authenticated=true;
    if(!authenticated){
        return <Navigate  to='/login' />
    }
  return children
}

export default PrivateRoute
