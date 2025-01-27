// step1: import the create store from redux-library
import { applyMiddleware,createStore,} from "redux";

import logger from "redux-logger";

// step2:creating the cakes state
let cakesState={
    cakes:100
}


// step3:creating the action Types
const BUY_CAKE="Buy_Cake"

// creating the actions 
function buyCake(){
    return{
        type:BUY_CAKE
    }
}

// step4: Creating the Reducers
const CakeReducer=(state=cakesState,action)=>{
    switch (action.type) {
        case BUY_CAKE:
            return {...state,cakes:state.cakes-1}
    
        default:
            return state
    }
}


// step1: creating the store for app : one store for an app
const store=createStore(CakeReducer,applyMiddleware(logger))
store.subscribe(()=>console.log(store.getState()))

//last: dispatching the action
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
