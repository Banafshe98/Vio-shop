import React from 'react'
import { useShoppingCartContext } from '../context/ShoppingCartContext'
import { Navigate, Outlet } from 'react-router-dom'


function privateRoute() {
   const {isLogin} = useShoppingCartContext()
  return (
    <>
    {
        isLogin? <Outlet/> : <Navigate to="/" />
    }
    </>
  )
}

export default privateRoute