import React, { useContext } from 'react'
import { AppContext } from '../../context/AuthContext'
import Home from '../../pages/home/Home'
import Login from '../../pages/login/Login'

const Auth = () => {
    const {admin} = useContext(AppContext)
  return (
    <>
      {
        admin.email
        ?
        <Home/>
        :
        <Login/>
      }   
    </>
  )
}

export default Auth