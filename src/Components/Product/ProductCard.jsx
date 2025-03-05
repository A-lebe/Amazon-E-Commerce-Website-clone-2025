// import React from 'react'
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import CurrenccyFormat from "../CurrencyFormat/CurrenccyFormat";
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from '../../utility/action.type';
import classes from "./Product.css/Product.module.css";
function ProductCard({ product,  flex, Renderdesc, renderAdd }) {
  const { image, title, price, id, rating, description } = product
  
  const [{state}, dispatch] =useContext(DataContext)
  console.log(state)
  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET, item : { image, title, price, id, rating, description }
    })
  }
  return (
       
    <>
    
    <div className={`${classes.card_container} ${flex ? classes.product_fixed:""}`} >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h4>{title}</h4>
         { Renderdesc && <div style={{ maxWidth: "750px" }}>{description}</div>}  
        <div className={classes.rating}>
          <Rating value={rating?.rate} precision={0.1} />
          <small>{rating?.count}</small>
        </div>
        <div>
          <CurrenccyFormat  amount={price} />
        </div>
         {renderAdd && <button className={classes.button} onClick={addToCart} >
                 
            add to carts
          </button>}
          
        
      </div>
      </div>
      </>
  );
}

export default ProductCard