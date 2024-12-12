import React from 'react'
import { useNavigate } from 'react-router-dom' //hook to navigate back to any pages of path given


const TrendingProducts = () => {
    let navigate=useNavigate()

  return (
    <div>
      Trending 
      {/* Programitically navigating back  */}
      <button className='btn btn-danger' onClick={()=>navigate('/')}>Back</button>
    </div>
  )
}

export default TrendingProducts
