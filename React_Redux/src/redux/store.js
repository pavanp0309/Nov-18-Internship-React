import { createStore,combineReducers,applyMiddleware } from "redux";
import CakeReducer from "./reducers/cakeReducers";
import { PensReducer } from "./reducers/cakeReducers";
import logger from 'redux-logger'
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer=combineReducers({
    cakes:CakeReducer, // cakes:100
    pens:PensReducer
})


// step1: creating the store for an APp
let store=createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)),) // one single reducer for a store 
export default store 