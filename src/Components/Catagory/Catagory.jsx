// import React from 'react'
import Catagoryfullinfo  from "../../Components/Catagory/Catagoryfullinfo";
import CatagoryCard from "./CatagoryCard";
import classes from "./Catagory.module.css";

function Catagory() {
  return (
    <section className={classes.catagory_container}>;
      
      {
        Catagoryfullinfo.map((infos,index) => {
          return <CatagoryCard data={infos} key={index } />
       }) 




    }


     </section>
  )
}

export default Catagory