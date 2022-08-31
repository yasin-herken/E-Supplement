import React from 'react'
import { logout } from '../Features/userSlice';
import {useDispatch} from 'react-redux';
function Logout() {
    const dispatch = useDispatch();
    const handleLogout = async (event) =>{
        event.preventDefault();
        dispatch(logout({
            loggedIn :false
        }))
    }
  return (
    <button onClick={handleLogout}></button>
  )
}

export default Logout