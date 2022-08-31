import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home.js';
import Login from './Pages/Login/login';
import {useSelector} from "react-redux";
import { selectUser } from './Pages/Features/userSlice';
import { useEffect } from 'react';
import { useState } from 'react';
import Logout from './Pages/Logout/logout';
function App() {
  const user = useSelector(selectUser);
  const [isAdmin,setIsAdmin] = useState(false);
  useEffect(()=>{
    if(user?.role==="Admin"){
      setIsAdmin(true)
    }else{
      setIsAdmin(false)
    }
  },[user])
  return (
      <Routes>
        <Route path="/login" element={isAdmin?<Home />:<Login />}></Route> 
        <Route exact path="/" element={isAdmin?<Home />:<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
  );
}

export default App;
