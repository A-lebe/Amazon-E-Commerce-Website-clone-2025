// import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LowerHeader from '../LowerHeader';
import "../../Components/Header/Header.css/Header.module.css";
import classes from "../../Components/Header/Header.css/Header.module.css";
function Header() {
  return (
    <section>
      
      <section className={classes.header_container}> 
        <div className={classes.logo_container}>
           {/* logo */}
          <a href="">
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
          </a>
          {/* delivery */}
          <span>
            {/* icon */}
          </span>
        </div>
        <div className={classes.delivery}>
            <p>delivered to</p>
          <span>Ethiopia</span>
        </div>
        <div className={classes.search}>
         
          <select name="" id="">
            <option value="All">All</option>
          </select>
          <input type="text" name="" id='' placeholder='search product' />
          <SearchIcon /> 
          </div>
        <div className={classes.order_container}>
          {/* rightt side link */}
          <div className={classes.language}>
           <a href="">
          <img src="https://t3.ftcdn.net/jpg/05/43/00/48/360_F_543004860_AiMa6Qr8ub2khwxduNxWg8R9bpYTauW4.jpg" alt="flag" />
         <select>
          <option value="EN">EN</option>
        </select>
        </a>
          </div>
          {/* three components */}
          <a href="">
            <div>
              <p>sign in</p>
              <span>
                account & lists
              </span>
            </div>
          </a>
          {/* orders */}
          <a href="">
            
              <p>returns</p>
              <span>
                & orders
              </span>
           
          </a>
          {/* cart */}
          <a to="cart" className={classes.cart}>
            {/* icon */}
             <AddShoppingCartIcon/>
            <span>0 </span>
          </a>
           </div>
         
      </section>
      <LowerHeader/>
   </section>
  )
}

export default Header