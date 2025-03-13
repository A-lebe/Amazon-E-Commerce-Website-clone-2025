import React from 'react'
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Order";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Cart from "./Pages/Cart/Cart2";
import Auth from './Pages/Auth/Auth';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import ProutectedRoute from "./Components/ProtectedRoute/ProutectedRoute";
  const stripePromise = loadStripe("pk_test_51R09m2GdCbKC1YR8EgKbt9VgbCj0Ja709rgyBVyvpaLwmE6IAulaWxzMX6t1MoOPuHKL3vMyvlrIpPjvdsKvyvHK00eslD026Y");
function Routing() {

  return (
       <div>
      
        <Routes>
           <Route path="/" element={<Landing/> } />
            <Route path="/Auth" element={<Auth/> } />
        <Route
          path="/payment"
          element={
            <ProutectedRoute
              msg={"You must login to pay"}
              redirect={"/payment"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProutectedRoute>
          }/>
        <Route path="/Orders" element={
          <ProutectedRoute msg={"you must login to acess your orders"} redirect={"/Orders"}>
            <Orders />
            </ProutectedRoute>
        } />
          <Route path="/category/:CatagoryName" element={<Results />} />
          <Route path="/products/:ProductId" element={<ProductDetail/>} />
          <Route path="/Cart" element={<Cart />} />
          
          
        </Routes>
       
    </div>
  )
}

export default Routing