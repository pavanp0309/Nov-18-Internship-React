// import the create store Function
import { createStore ,combineReducers} from "redux"


// step2:creating the Initial state 
let chipsState={
    chips:100
}

let cakesState={
    cakes:100
}

// step3: creating the action for 
function buyChips(){
    return{
        type:"BUY_CHIPS"
    }
}


function buyCake(){
    return{
        type:"BUY_CAKE"
    }
}


// step4: creating the reducers 
const CakeReducer=(state=cakesState,action)=>{
    switch (action.type) {
        case "BUY_CAKE":
            return {...state,cakes:state.cakes-1}
    
        default:
            return state
    }
}

const ChipsReducer=(state=chipsState,action)=>{
    switch (action.type) {
        case "BUY_CHIPS":
            return {...state,chips:state.chips-1}
    
        default:
            return state
    }
}



// step5 combining the multiple Reducers
let rootReducers=combineReducers({ChipsReducer,CakeReducer})



// SUBCRIBING TO THE STORE
// step1:creating the store : for an app there will be only one store
let store=createStore(rootReducers)
store.subscribe(()=>console.log(store.getState()))
store.dispatch(buyCake())