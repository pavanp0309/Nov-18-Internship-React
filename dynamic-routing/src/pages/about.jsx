import React from 'react'
import Data from '../data/data'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div className='row gx-3 gy-3'>
     {  
      Data.map((ele,i)=>{
        return (
        
          <NavLink  className='col-12 col-sm-12 col-md-3 col-lg-3' to={`/about/${ele.id}`}>
         <div className='card shadow border p-3'>
           <h1>{ele.name}</h1>
           <h1>{ele.email}</h1>
           <h1>{ele.phone}</h1>
         </div>
            
          </NavLink>
         
      
        )
      })
     }
    </div>
  )
}

export default About
