//  import React from 'react'
import Layout from "../../Components/Layout/Layout";
import { useContext } from "react";
import { DataContext } from "../../Components/DataProvider/DataProvider"
import ProductCard from "../../Components/Product/ProductCard"
import CurrenccyFormat from "../../Components/CurrencyFormat/CurrenccyFormat";
import { Link } from "react-router-dom";
import { Type } from "../../utility/action.type";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import classes from "./Cart.module.css";

function Cart2() {
  const { state, dispatch } = useContext(DataContext);
  const { basket } = state
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount
  }, 0)

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET, item
    })
  }
  
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET, id
    })
  }


  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {
            basket?.length == 0 ? (
              <p> Oops!!! No item in your cart</p>
            ) : (
              basket?.map((item, index)=> 
                (<div className={classes.cart_product}>
                    <ProductCard
                      key={index}
                      product={item}
                      renderDesc={true}
                      renderAdd={false}
                      flex={true}
                    />
                
                     <div className={classes.btn_container}>
                      <button className={classes.btn} onClick={() => increment(item)}>
                        < IoIosArrowUp size={20} />

                      </button>
                      <span>{item.amount}</span>
                      <button className={classes.btn} onClick={() => decrement(item.id)}>
                        <IoIosArrowDown size={20} />
                      </button>
                    </div> 

                  </div>
              
                )
              
              )
            )
          } </div>

        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrenccyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payment">Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart2;