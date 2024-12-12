import React from 'react'
import { useNavigate } from 'react-router-dom' //hook to navigate back to any pages of path given

const PageNotFound = () => {
   let navigate=useNavigate()
  return (
    <div className='bg-warning text-center'>
      404 Error
      <button className='btn btn-danger' onClick={()=>navigate('/')}>Back</button>
    </div>
  )
}

export default PageNotFound
