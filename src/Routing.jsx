import React from 'react'

import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import SignIn from './Pages/Auth/SignIn';
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Order";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Cart from "./Pages/Cart/Cart2";
function Routing() {
  return (
       <div>
      
        <Routes>
          
             <Route path="/" element={<Landing/> } />
            <Route path="/SignIn" element={<SignIn/> } />
            <Route path="/Payment" element={ <Payment/>} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/category/:CatagoryName" element={<Results />} />
          <Route path="/products/:ProductId" element={<ProductDetail/>} />
          <Route path="/Cart" element={<Cart />} />
          
          
        </Routes>
       
    </div>
  )
}

export default Routing