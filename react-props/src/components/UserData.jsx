import React from 'react'
import PropTypes from 'prop-types';

const UserData = ({name,mobile,isAdmin,isActive,Address,Logout,data}) => {
  return (
    <div>
      <h2>Name :{name}</h2>
      <h2>Mobile:{mobile}</h2>
      <h2>IsAdmin :{isAdmin?"edit":"no-access"}</h2>
      <h2>IsActive:{isActive[1]}</h2>
      <h2>Address:{Address.city}</h2>
      <button onClick={Logout}>LogOut</button>
    </div>
  )
}

export default UserData

// type checking in the Props or can be (typescript)
UserData.propTypes={
    name:PropTypes.string.isRequired,
    mobile:PropTypes.number.isRequired,
    isActive:PropTypes.arrayOf(PropTypes.string),
    Address:PropTypes.object.isRequired,
    Logout:PropTypes.func.isRequired,
    data:PropTypes.node
}