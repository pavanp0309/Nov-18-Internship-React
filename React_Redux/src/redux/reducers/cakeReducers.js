import { BUY_CHIPS,BUY_PENS } from "../actions/actionTypes"

// Intial State Of an app
let initialState={
    cakes:100
}

let PensinitialState={
    pens:100
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




export const PensReducer=(state=PensinitialState,action)=>{
    switch (action.type) {
        case BUY_PENS:
            return {
                ...state,pens:state.pens-1
            }
        default:
            return state
    }
}


export default CakeReducer