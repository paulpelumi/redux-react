import React from 'react'
import { useDispatch } from "react-redux"
import { login, logout } from "../features/user";

function Login() {
   const dispatch = useDispatch();


return (
    <div>
    <button onClick={() => {
      dispatch(login({name: "Pelumi Paul", age: 27, email: "paulpelumi@cgmail.com" }))
      }}
      >
      
      Login</button>

      <button
      onClick={() => {
        dispatch(logout())
      }}>
        LogOut
      </button>
    </div>
  )
}

export default Login