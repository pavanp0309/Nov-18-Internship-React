import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  console.log("productcard:", product);
  const {id,image,title,price,description,rating: { rate, count }} = product;
  
  let cardtitle=title.length<=51?title:title.slice(0,50)
  
  return (
    <div className="col-12 col-sm-12 col-md-3 col-lg-3">
      <Link to={`/shop/:${id}`} className="nav-link">
      <div class="card shadow p-3">
        <img src={image} class="card-img-top product-img" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{cardtitle}</h5>
          <p class="card-text">{price}</p>
          <button className="btn btn-success">Addtocart</button>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default ProductCard;
