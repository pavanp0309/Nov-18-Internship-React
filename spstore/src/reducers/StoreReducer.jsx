// step1: creating the initial State for cart
export let initialState = {
  cart: []  
}

// step2: creating the Reducers

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return;
    case "REMOVE_ITEM_IN_CART":
      return;
    case "INCREMENT":
      return;
    case "DECREMENT":
      return;

    default:
      break;
  }
};


export default reducer