import { useState } from "react"

const Example = () => {
    // const [incre,setIncre]=useState(1)

    // function handleIncrement(){
    //     setIncre((prev)=>prev+1)
    //     setIncre((prev)=>prev+1)
    //     setIncre((prev)=>prev+1)
    
    // }


    const [user,setUser]=useState({
         name:"pavan",
         email:"",
         Mobile:7995524942
    })
    console.log(user)

    function handleEdit(){
        setUser({
            ...user,
            email:"pavan@gmail.com", 
        })
    }

  return (
    <div>

        <h1>Name:{user.name}</h1>
        <h1>Email:{user.email}</h1>
        <h1>Mobile:{user.Mobile}</h1>
        <button onClick={handleEdit}>Edit</button>




        {/* <h1>{incre}</h1>
        <button onClick={handleIncrement}>increment</button>
        <button>Decrement</button>
     */}
    </div>
  )
}

export default Example
