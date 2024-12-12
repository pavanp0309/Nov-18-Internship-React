import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Data from '../data/data'

const UserDetails = () => {
    const {id}=useParams()
    console.log(id)
    const navigate=useNavigate()

    const user=Data.find(u=>u.id==id)
    const {name,username,email,address:{city},phone,website,company:{name:cn}}=user
  return (
<div className='d-flex justify-content-center'>
<div class="card mb-3 shadow " style={{width:"400px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="../src/assets/user.jpg" class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Name:{name}</h5>
        <p class="card-text">Email:{email}</p>
        <p class="card-text">Phone:{phone}</p>
        <p class="card-text">City:{city}</p>
        <p class="card-text">Website:{website}</p>
        <p class="card-text">Company:{cn}</p>
     <button className='btn btn-success ' onClick={()=>navigate('/about')}>Back</button>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default UserDetails
