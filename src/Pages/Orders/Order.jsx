import React,{useState,useEffect} from 'react'
import { db } from '../../utility/Firebase';
import Layout from "../../Components/Layout/Layout";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard"
import { useContext } from "react";
import classes from "./Order.module.css";
function Order() {
  const { state, dispatch } = useContext(DataContext)
  const{user}=state
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).collection("orders").orderBy("created", "desc").onSnapshot((snapShot) => {
        // console.log(snapShot);
        setOrders(
          snapShot.docs.map((doc) => (
            {
              id:doc.id,
              data:doc.data(),
          }))
        )
      })
    }else{
      
    }
  },[])
  return (
    < Layout>
      <section className={classes.container}>
        <div className={classes.orders_container}>
          <h2>Your orders</h2>
          {/* {orderd items} */}
          {
            orders?.length===0&& <div style={{padding:"20px"}}>you don't have orders yet</div>
          }
          <div>
            {
              orders?.map((eachOrder,i) => {
                return (
                  <div key={i}>
                    <hr />
                    <p>order.Id:{eachOrder?.id}</p>
                    
                    {
                      eachOrder?.data?.basket?.map(order => {
                       return <ProductCard flex={true}
                          product={order}
                         key={order.id}
                         renderAdd={true}
                        />
                      })
                    }
                  </div>
                )
              
              
                
              })
          }
          </div>
        </div>
        </section>
      </Layout>
  )
}

export default Order
