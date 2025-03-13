import { useEffect, useState } from 'react';
import axios from "axios";
import ProductCard from './ProductCard';
import classes from "../Product/Product.css/Product.module.css";
function Product() {
  const [Products, setProducts] = useState([]);
  const [Loading, setLoading] = useState([])
 useEffect(() => {
     setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // console.log(res);
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
         setLoading(false);
      });
  }, []);
  return (
    <>
     
      <section className={classes.product_container}>
      {
        Products.map((singleproduct) => {
          return < ProductCard renderAdd={ true} product={singleproduct} key={singleproduct.id} />
        })
        }  
      </section>
      </>
  )
}

export default Product