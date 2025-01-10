import {useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from "axios";
import { useCart } from '../store/StoreContext';
import { toast } from 'react-toastify';

const ProductDetails = () => {
  // getting the id from Products
  const {id}=useParams()

   // usestate for displaying the products fetched
   let [products, setProducts] = useState([]);
   console.log(products);
 
   // useEffect For Fetching The data From An APi
   useEffect(() => {
     const fetchproducts = async () => {
       const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
       setProducts(response.data);
     };
 
     // calling the Fuction to fetch the Products
     fetchproducts();
 
     return () => {};
   }, []); // fetch only once the data at initial load
 
   const {image,title,price,description} = products

   if(products.length==0)return (<div class="spinner">
    <div class="rect1"></div>
    <div class="rect2"></div>
    <div class="rect3"></div>
    <div class="rect4"></div>
    <div class="rect5"></div>
  </div>)

    let {dispatch}=useCart()
  
    // handling the AddTocart Functionality
    function handleAddtocart(product){
     dispatch({type:"ADD_TO_CART",payload:product})
     toast.success("added item to cart")
    }
    

  return (
  
      <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={image} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{price}</p>
        <p class="card-text">{description}</p>
        <button className="btn btn-success" onClick={()=>handleAddtocart(products)}>Addtocart</button>
      </div>
    </div>
  </div>
</div>
   
  )
}

export default ProductDetails
