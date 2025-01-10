import { useReducer, useState } from "react";
import Banking from "./components/Banking";

// step1: creating the initial state
let initialState = { count: 0 };

// step2: creating the reducer functions
// action consists of two values 1.type 2.payload-(data)
const reducer = (state, action) => {
  console.log(action.type)
  switch (action.type) {
    case "INCREMENT":
      return {count:state.count+action.payload}
    case "DECREMENT":
      return {count:state.count-1}
    case "RESET":
      return {count:0}

    default:
      break;
  }
};

const App = () => {
  
//  step3: using the useReducer Hook
let[state,dispatch]=useReducer(reducer,initialState)
 console.log(state.count)
  return (
    <>
   <h1>{state.count}</h1>
   <button onClick={()=>dispatch({type:"INCREMENT",payload:10})}>Increment</button>
   <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
   <button onClick={()=>dispatch({type:"RESET"})}>RESEt</button>
   {/* banking app */} 
   <h1>Banking APp</h1>
   <Banking/>
    </>
  )
};

export default App;
