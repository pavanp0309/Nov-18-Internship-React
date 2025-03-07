// import createStore for redux 
// step1:
const {createStore}=require("redux")
// import { composeWithDevTools } from "@redux-devtools/extension";


// step2: Define an initial state value for the app
const initialState={
    chips:1000
}

// creating the Actions
function BuyChips(){
    return{
        type:"WITHDRAW"
    }
}

// step3: creating the Reducer
let CashReducer=(state=initialState,action)=>{
      switch (action.type) {
        case "WITHDRAW":
            return {...state,amount:state.chips-1}
        default:
            return state
      }
}


// step4:creating the store
const store=createStore(CashReducer) //we can only pass one Reducers to a store
console.log(store)
store.subscribe(()=>console.log(store.getState()))
console.log(store.dispatch(BuyChips()))
console.log(store.dispatch(BuyChips()))
console.log(store.dispatch(BuyChips()))