// import React, { useState, useContext,  } from 'react'
// import { useNavigate,useLocation} from "react-router-dom";
// import { Link } from 'react-router-dom';
// import { auth } from "../../utility/Firebase";
// import { Type } from "../../utility/action.type";
// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword
// } from "firebase/auth"
// import { DataContext } from '../../Components/DataProvider/DataProvider';
// import {ClipLoader  } from "react-spinners";
// import classes from "./Auth.module.css";
// function Auth() {
//   const [email, setEmail] = useState("")
//   const [password, setPasword] = useState("")
//   const [error, setError] = useState("")
//   const { state, dispatch } = useContext(DataContext);
//   const { user }=state
//   const navStateData = useLocation()
//   console.log(navStateData)
//   // console.log(user);
//   const [loading, setLoading] = useState({ SignIn: false, SignUp: false })
//   const navigate = useNavigate();
//   const authHandler = async(e) => {
//     e.preventDefault()
//     if (e.target.name ==="SignIn") {
//       setLoading({...loading,SignIn:true})
//       signInWithEmailAndPassword(auth, email, password).then((userInfo) => {
//         console.log(userInfo)
//         dispatch({
//           type: Type.SET_USER,
//           user:userInfo.user
//         })
//       }).catch((error) => {
//         setError(error.mesage);
//         setLoading({ ...loading,SignIn:false });
//         navigate(navStateData?.state?.redirect || "/");
//      })
//     } else {
//       setLoading({ ...loading, SignUp: true });
//       navigate(navStateData?.state?.redirect || "/");
//       createUserWithEmailAndPassword(auth, email, password).then((userInfo) => {
//          dispatch({
//           type: Type.SET_USER,
//           user: userInfo.user
//         })
//         setLoading({ ...loading, SignUp: false })
//         console.log(userInfo)
//       }).catch((error) => {
//         setError(error.mesage);
       
//       });
//     }
//   }
//   return (
    
//     <section className={classes.login}>
//       {/* {logo} */}
//         <Link>
//           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" alt="" />
//       </Link>

//       <div className={classes.login_container}>
//         <h1>sign in</h1>

//         {
//           navStateData?.state?.msg && (
//             <small style={{
//               padding: "5px",
//               textAlign: "center",
//               color: "red",
//               fontWeight:"bold"

//             }

//             }>
//              {navStateData?.state?.msg}
//             </small>
//           )
//         }
//         <form action="">
//           <div>
//             <label htmlFor="email">email</label>
//             {/* // controlled input wehen we try to get value through use state*/}
//             <input value={email} onChange={(e)=>setEmail (e.target.value)} type="email" id='email' />
//     </div>
//      <div>
//             <label htmlFor="password">password</label>
//             <input value={password} onChange={(e)=>setPasword(e.target.value) }type="password" id='password' />
//     </div>
//           <button type="submit" onClick={authHandler} className={classes.login_signin_btn}>
//             {
//               loading.SignIn?(<ClipLoader color="#000" size={15}></ClipLoader>):(
//             "Sign In"
//               )
//             }
//           </button>
          
//         </form>
//         <p>
//           By signing in you agree to the Amazon Fake Cione conditions of use & Sale.
//           please see our privacy notice,our cokkies Notice and our interest_Based Ads Notice.

//         </p>
//         <button type="submit" onClick={authHandler} className={classes.login_register_btn}>
//           {
//             loading.SignUp ? (<clipLoader color="#000" size={15}></clipLoader>) :
//               (" Create your amazon Account")
//             }
//         </button>
//         {
//           error && <small style={{ paddingTop: "5px", color:"red"}}>{error }</small>
//         }
//       </div>
//   </section>
//   )
// }

// export default Auth


import React, { useState, useEffect, useContext } from "react";
import classes from "./Auth.module.css";
import { Link, useNavigate, useLocation } from "react-router";
import { auth } from "../../utility/Firebase";
import { Type } from "../../utility/action.type";
import { ClipLoader } from "react-spinners";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({ signIn: false, signUp: false });
  const navigate = useNavigate();
  const navStateData = useLocation();
  console.log(navStateData);

  //extracting the user property from state
  // const user = state.user;//accesses the user property from state and assigns it to the variable user
  const { state, dispatch } = useContext(DataContext);
  const { user } = state; //object destructuring to extract the user property from state and directly declare it as a variable.
  // console.log(user);
  // console.log(email, password);
  const authHandler = async (e) => {
    e.preventDefault();
    // console.log(e.target.name);
    if (e.target.name == "signIn") {
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo);
          dispatch({ type: Type.SET_USER, user: userInfo.user });
          setLoading({ ...loading, signIn: false });
         navigate(navStateData?.state?.redirect ||"/" );
         
        })
        .catch((error) => {
          // console.log(error);
          setError(error.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo);
          dispatch({ type: Type.SET_USER, user: userInfo.user });
          setLoading({ ...loading, signUp: false });
          
          navigate(navStateData?.state?.redirect ||"/" );
        })
        .catch((error) => {
          // console.log(error);
          setError(error.message);
          setLoading({ ...loading, signUp: false });
        });
    }
  };
  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png?20220213013322"
          alt="logo"
        />
      </Link>

      {/* form  */}
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        {navStateData?.state?.msg && (
          <small
            style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
            }}
          >
            {navStateData?.state?.msg}
          </small>
        )}
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
             
              value={password}
              onChange={(e) => setPassword(e.target.value)}
               type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            name="signIn"
            onClick={authHandler}
             className={classes.login_signin_btn}
          >
            {loading.signIn ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        {/* Agreement */}
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button
          type="submit"
          name="signUp"
          onClick={authHandler}
           className={classes.login_registerButton}
        >
          {loading.signUp ? (
            <ClipLoader color="#000" size={15}></ClipLoader>
          ) : (
            "Create Your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}
export default Auth;