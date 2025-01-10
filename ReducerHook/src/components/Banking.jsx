import { useReducer } from "react";

// creatiing an InitialState for amount
let initialState = { amount: 1000 };

// step2: creating The reducers To carry out the action deposit withdraw and balance
const reducer = (state, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return { amount: state.amount + action.payload };
    case "WITHDRAW":
      return { amount: state.amount - action.payload };
    case "BALANCE":
      return { amount: state.amount };

    default:
      return state;
  }
};

// amount--initialstate
// 1.Deposits money.
// 2. Withdraws money.
// 3. Checks balance
const Banking = () => {
 const [state,dispatch]=useReducer(reducer,initialState)

  return (
  <>
    <h1>{state.amount}</h1>
    <button onClick={()=>dispatch({type:"DEPOSIT",payload:10})}>Deposit</button>
   <button onClick={()=>dispatch({type:"WITHDRAW",payload:50})}>WITHDRAW</button>
   <button onClick={()=>dispatch({type:"BALANCE"})}>Check Balance</button>
  </>)
};

export default Banking;
