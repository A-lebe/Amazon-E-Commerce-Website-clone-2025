// import { useState } from 'react';
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import ProductUrl from "../../Api/EndPoints";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";
import classes from "./Results.module.css";
function Results() {
  const [Results, setResults] = useState([])
  const [Loading, setLoading] = useState(false)
  // use params helps to acess dynamic pages which is CatagoryName
  const { CatagoryName } = useParams()

  console.log(CatagoryName)
  useEffect(() => {
    setLoading(true)
    axios.get(`${ProductUrl}/products/category/${CatagoryName}`)
    .then((res) => {
      console.log(res)
      setResults(res.data)
      }).catch((err) => {
        console.log(err)
        
  })
  },[CatagoryName])
  
  
  return (
    <Layout>
      {
         Loading?(< Loader/>):( <div>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>category/{CatagoryName}</p>
        <hr />
        <div className={classes.Products_Container}>
          {Results.map((product) => {
           return < ProductCard
              key={product.id}
              product={product} />
          })
            

          }
        </div>
      </div>)
      }
      <div>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>category/{CatagoryName}</p>
        <hr />
        <div className={classes.Products_Container}>
          {Results.map((product) => {
           return < ProductCard
              key={product.id}
             product={product}
             renderAdd={true}
             RenderDesc={false}
           />
          })
            

          }
        </div>
      </div>
      </Layout>
  )
}

export default Results