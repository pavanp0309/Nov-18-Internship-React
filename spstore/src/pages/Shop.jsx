import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import ProductCard from "../components/Product";

const Shop = () => {
  // usestate for displaying the products fetched
  let [products, setProducts] = useState([]);
  console.log(products);

  // useEffect For Fetching The data From An APi
  useEffect(() => {
    const fetchproducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    };

    // calling the Fuction to fetch the Products
    fetchproducts();

    return () => {};
  }, []); // fetch only once the data at initial load

  if(products.length==0)return (<div class="spinner">
    <div class="rect1"></div>
    <div class="rect2"></div>
    <div class="rect3"></div>
    <div class="rect4"></div>
    <div class="rect5"></div>
  </div>)

  return (
    <>
     <div className="row">
      {
        products.map((product)=><ProductCard  product={product}/>)
      }
     </div>
    </>
  )
};

export default Shop;
