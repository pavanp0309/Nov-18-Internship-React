import React from "react";
import { useCart } from "../store/StoreContext";

const Cart = () => {
  const { state, dispatch } = useCart();
  const { cart } = state;
  // function for Handling the Increment
function handleIncrement(productId){
dispatch({type:"INCREMENT",payload:{id:productId}})
   toast.success("Incremented item to cart")
}
  // function for Handling the decrement
function handleDecrement(productId){
  dispatch({type:"DECREMENT",payload:{id:productId}})
   toast.success("decrement item ")
}
  // function for Handling the Remove
  function handleRemove(productId){
    dispatch({type:"REMOVE_ITEM_IN_CART",payload:{id:productId}})
    toast.success("Removed item to cart")
  }
  return (
    <div className="container">
      <div className="row">
        {
          cart.length>0?(cart.map((item)=>(
            <div className="col-12 col-sm-12 col-md-3 col-lg-3">
            <div class="card shadow p-3">
              <img src={item.image} class="card-img-top product-img" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text">{item.price*item.quantity}</p>
                <p class="card-text">{item.quantity}</p>
                <button className="btn btn-outline-success" onClick={()=>handleIncrement(item.id)}>+</button>
                <button className="btn btn-outline-warning" onClick={()=>handleDecrement(item.id)}>-</button>
                <button className="btn btn-outline-danger" onClick={()=>handleRemove(item.id)}>🎒</button>
              </div>
            </div>
           
          </div>
          ))):(<h1>Cart Is Empty</h1>)
        }
      </div>
    </div>
  );
};

export default Cart;
