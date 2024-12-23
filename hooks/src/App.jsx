
import { useState } from 'react'
import Example from './components/Example'


// syntacx: const [initialvalue,updatefunction]=usestate()
const App = () => {
  const [data,setData]=useState("react")
  const [increment,setIncrement]=useState(1)
 const [dark,setDark]=useState(false)


 function handleMode(){
  setDark(!dark)
 }

  console.log(data)

  function handleData(){
   setData("reactdev")
  }
  
  function handleincrement(){
    setIncrement(increment+1)
   }
   
   function handledecrement(){
    setIncrement(increment-1)
   }
   



  return (
    // <div className={dark?"dark":"light"}>
    // <h1>{data}</h1>
    // <h1>{dark?"dark":"light"}</h1>
    // <h1>{increment}</h1>
    //   <button onClick={handleMode}>{dark?"🌙":"🌞"}</button>
    //   <button onClick={handleData}>change</button>
    //   <button onClick={ handleincrement}>+</button>
    //   <button onClick={ handledecrement}>-</button>
    // </div>

    <Example/>
  )
}

export default App




