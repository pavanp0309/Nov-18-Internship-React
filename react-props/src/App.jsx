import React from 'react'
import Card from './components/Card'
import ProfileCard from './components/ProfileCard'
import Home from './components/Home'
import UserData from './components/UserData'

// Parent Component
const App = () => {
  const logout=()=>alert("user logged Out")
  return (
    <>
    {/* child component -Props */}
    <div id="" className=''>
      {/* child component */}
      <Card data="Ravi" id={1}>
        <p id=''>hello I am child component</p>
      </Card>
      <Card data="Raju" id={2}>
        <p id=''>hello I am child component</p>
      </Card>
      <Card data="swathi" id={3}>
        <p id=''>hello I am child component</p>
      </Card>
    </div>

    {/* Profile component-different types of props */}
    <ProfileCard 
     name="Ravikumar" // string
     mobile={7995524942} //number
     isAdmin={false} ///boolean
     isActive={["online","offline"]} //array
     Address={{city:"hyderabad",pincode:543245}} //object
     Logout={logout} //function
     data={<span>Prime User</span>}
    />



{/* home component-default props */}


<div>
<Home user='Ravi' id={'🎯'}/>
<Home  user='ramu' />
<Home   />{/*No data passed */}
</div>


{/* PropTypes library for checking the type of Props at runtime */}

<UserData
// string
  mobile={'7995524942'} //number
  isAdmin={false} ///boolean
  isActive={[0,"offline"]} //array
  Address={{city:"hyderabad",pincode:543245}} //object
  Logout={logout} //function
  data={<span>Prime User</span>}
/>



    </>
  )
}

export default App
