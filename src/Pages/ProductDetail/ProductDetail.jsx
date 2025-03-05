// import React from 'react'
import { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import  ProductUrl  from "../../Api/EndPoints";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";
import ProductCard from "../../Components/Product/ProductCard";
// import classes from "./ProductDetail.css";
function ProductDetail() {
  const [product, setProduct ]= useState({})
   const {Load,setLoad}=useState(false)
   const {ProductId} = useParams()
  console.log(ProductId) 
  useEffect(() => {
    axios.get(`${ProductUrl}/products/${ProductId}`).then((res) => {
      console.log(res)
      setProduct(res.data);
      setLoad(res.data)
      console.log(res.data)
    }).catch((err) => {
      console.log(err);
    })
  },[])

    
  return (
    <Layout>
      {
      Load?(<Loader/>):( <div>
        
          <ProductCard
            product={product}
            flex={true}
            Renderdesc={true}
            renderAdd={true}
          /> 
      
      
      </div>)
      }
     </Layout>
  )
}

export default ProductDetail