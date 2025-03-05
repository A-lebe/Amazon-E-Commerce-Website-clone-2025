// import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import classes from "./Header/Header.css/Header.module.css";
import "../Components/Header/Header.css/Header.module.css";
function LowerHeader() {
  return (
      <div className={classes.lower_container}>
          <ul>
              <li className={classes.all}>
                  <MenuIcon /> 
                <p>All</p>  
              </li>
              <li>Todays Deals</li>
              <li>Customer Service</li>
              <li>Rigistry</li>
              <li>Gift Cards</li>
              <li>Sale</li>
          </ul>
    </div>
  )
}

export default LowerHeader