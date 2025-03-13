
import { DataContext } from './Components/DataProvider/DataProvider';
import { useEffect } from 'react';
import { Type } from "./utility/action.type";
import { auth } from "./utility/Firebase";
import './App.css'

// import Header from './Components/Header/Header';
import Routing from './Routing';
import { useContext } from 'react';
// import CarouselEffect from "./Components/Carousel/CarouselEffect";
// import Catagory from './Components/Catagory/Catagory';
// import Product from './Components/Product/Product'
function App() {
  const { state, dispatch } = useContext(DataContext);
  const {user,basket}=state
  useEffect(() => {
    auth.onAuthStateChanged((authUser)=> {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          auth:authUser
        })
      } else {
         dispatch({
          type: Type.SET_USER,
          user:null
      })
      }
    })
  },[])

  return (
    <>
      {/* <Header/> */}
      <Routing/>
    </>
  )
}

export default App



//1. Check for Syntax Errors
//Run npm run lint or npx eslint . to check for syntax issues.
// 4. Delete and Reinstall Dependencies
// sh
// Copy
// Edit
// rm -rf node_modules package-lock.json
// npm install
// 7. Deploy Again with Debugging
// sh
// Copy
// Edit
// firebase deploy --only functions --debug