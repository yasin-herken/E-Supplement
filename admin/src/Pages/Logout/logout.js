import React from 'react'
import { logout } from "../../Redux/userRedux.js";
import {useDispatch} from 'react-redux';
function Logout() {
    const dispatch = useDispatch();
    const handleLogout = async (event) =>{
        event.preventDefault();
        dispatch(logout())
    }
  return (
    <button onClick={handleLogout}></button>
  )
}

export default Logout