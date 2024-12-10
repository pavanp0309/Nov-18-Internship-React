import React from 'react'

const ProfileCard = ({name,mobile,isAdmin,isActive,Address,Logout,data}) => {
  // const {name}=props
  console.log(data)
  return (
    <div>
      <h2>Name :{name}</h2>
      <h2>Mobile:{mobile}</h2>
      <h2>IsAdmin :{isAdmin?"edit":"no-access"}</h2>
      <h2>IsActive:{isActive[1]}</h2>
      <h2>Address:{Address.city}</h2>
      <button onClick={Logout}>LogOut</button>
      {data}
      
    </div>
  )
}

export default ProfileCard
