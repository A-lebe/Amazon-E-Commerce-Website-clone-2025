// import React from 'react'
import { FaSearch } from "react-icons/fa";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';;
import LowerHeader from '../LowerHeader';
import { SlLocationPin } from "react-icons/sl";
import "../../Components/Header/Header.css/Header.module.css";
import { auth } from "../../utility/Firebase";
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import classes from "../../Components/Header/Header.css/Header.module.css";
import{useContext}from "react"
function Header() {
  const { state, dispatch } = useContext(DataContext)
  const { user, basket } = state
  console.log(user)
  const totalItem= basket?.reduce ((amount,item)=>{
  return item.amount+amount
},0)
  return (
    <section className={classes.fixed}>
      
      <section className={classes.header_container}> 
        <div className={classes.logo_container}>
           {/* logo */}
          <Link to="/">
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
          </Link>
          {/* delivery */}
          <span>
            {/* icon */}
          </span>
        </div>
        <div className={classes.delivery}>
          <span><SlLocationPin /></span>

        <div>
              <p>delivered to</p>
          <span>Ethiopia</span>
        </div>
      
        </div>
        <div className={classes.search}>
         
          <select name="" id="">
            <option value="All">All</option>
          </select>
          <input type="text" name="" id='' placeholder='search product' />
          <FaSearch size={38} /> 
          </div>
        <div className={classes.order_container}>
          {/* rightt side link */}
          <div className={classes.language}>
           <Link to="/">
          <img src="https://t3.ftcdn.net/jpg/05/43/00/48/360_F_543004860_AiMa6Qr8ub2khwxduNxWg8R9bpYTauW4.jpg" alt="flag" />
         <select>
          <option value="EN">EN</option>
        </select>
        </Link>
          </div>
          {/* three components */}
          <Link to={!user && "/Auth"}>
            <div>
              {
                user ?
                  (
                    <>
                    <p>Hello{user?.email?.split("@")[0]}</p>
                      <span  onClick={()=>auth.signOut}> sign out</span> 
                  </>
                  
                ) : (
                    <>
                <p >Hello,   sign in</p> 
                      <span >
                account & lists
                      </span>
                       </>
                )
              }
            </div>
           
          </Link>
          {/* orders */}
          <Link to="/Orders">
            
              <p>returns</p>
              <span>
                & orders
              </span>
           
          </Link>
          {/* cart */}
          <Link to="/Cart" className={classes.cart}>
            {/* icon */}
             
            <span>{totalItem } </span>
            <AddShoppingCartIcon size={35} /> 
          </Link>
           </div>
         
      </section>
      <LowerHeader/>
    </section>
    
  )
  
}

export default Header
