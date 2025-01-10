import { createContext, useContext, useReducer, useEffect } from "react";
import { initialState } from "../reducers/StoreReducer";
import reducer from "../reducers/StoreReducer";

// step :1 creating the cartcontext (store)
export let cartContext = createContext();

// step2: creating the Provider
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //  useeffect for handling the cart functionality -adding&removing-items to localstorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));

    return () => {}; //clean up
  }, [state.cart]);
  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;

// creating the Custom Hook To avoid the Repeative Logic
// custom always starts with useHookName

export const useCart = () => {
  return useContext(cartContext);
};
