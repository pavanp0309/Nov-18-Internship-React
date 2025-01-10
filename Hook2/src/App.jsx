import {useState,useEffect} from 'react'


const App = () => {
  let [count,setCount]=useState(1)
  let [count1,setCount1]=useState(1)
  let [width,setWidth]=useState(window.innerWidth)
 function handleWidth(){
  setWidth(window.innerWidth)
 }

  useEffect(()=>{
    console.log("useffect in mouting phase-1")
   

  })

  useEffect(()=>{
    console.log("useffect with empty dependency-2")
  },[])

  useEffect(()=>{
    console.log("useffect with  dependency-3")
  },[count])

  useEffect(()=>{
    console.log("useeffect for cleanup")
    let data= window.addEventListener("resize",handleWidth)

    return window.removeEventListener("resize",handleWidth)

  },[])

  return (
    <div>
      <h1>{count}</h1>
      <h1>{count1}</h1>
      <h1>{width}</h1>
      <button onClick={()=>setCount(count+1)}>update</button>
      <button onClick={()=>setCount1(count1+1)}>update-1</button>
    </div>
  )
}

export default App
