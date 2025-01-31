import { BUY_CHIPS ,BUY_PENS} from "./actionTypes";


// step3: creating the actions
function BuyChips(){
    return{
        type:BUY_CHIPS
    }
}

export function BuyPens(){
    return{
        type:BUY_PENS
    }
}

export default BuyChips