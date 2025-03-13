import { React,useContext,useEffect } from  'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from "../DataProvider/DataProvider";

function ProutectedRoute({ children,msg,redirect }) {
    const navigate = useNavigate();
  const { state, dispatch } = useContext(DataContext);
  const{user}=state



    useEffect(() => {
        if (!user) {
           navigate("/Auth",{state:{msg,redirect}})
       }
    },[user])
  return (
   children
  )
}

export default ProutectedRoute
