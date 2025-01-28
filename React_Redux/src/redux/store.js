import { createStore } from "redux";
import CakeReducer from "./reducers/cakeReducers";


// step1: creating the store for an APp
let store=createStore(CakeReducer) // one single reducer for a store 
export default store 