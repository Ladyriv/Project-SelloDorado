import React from 'react'
import { Navigate} from 'react-router-dom'

const PrivateRoutes = ({}) => {

    let auth = {'token': false}
  return (
    auth.token ? {children} : <Navigate to= '/'/>
  )
  /*let isLogged = localStorage.getItem("picked")

  if(!isLogged){
    return <Navigate to= '/'/>
  } */
}
  
  /*
  let auth = {'token': false}
  return (
    auth.token ? {children} : <Navigate to= '/'/>

  )
  */

export default PrivateRoutes