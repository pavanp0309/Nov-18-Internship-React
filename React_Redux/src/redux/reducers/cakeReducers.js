import { BUY_CHIPS } from "./actionTypes";

// Intial State Of an app
let initialState={
    cakes:100
}


// step4: creating Reducers for updating the state of an app
const CakeReducer=(state=initialState,action)=>{
    switch (action.type) {
        case BUY_CHIPS:
            return {
                ...state,cakes:state.cakes-1
            }
        default:
            return state
    }
}

export default CakeReducer