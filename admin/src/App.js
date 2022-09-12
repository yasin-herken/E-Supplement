import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home.js';
import Login from './Pages/Login/login';
import { useSelector } from "react-redux";
import { selectUser } from './Pages/Features/userSlice';
import { useEffect } from 'react';
import { useState } from 'react';
import Logout from './Pages/Logout/logout';
import UserList from './Pages/UserList/userList';
import User from './Pages/User/user';
import NewUser from './Pages/NewUser/newUser';
import ProductList from './Pages/ProductList/productList';
import Product from './Pages/Product/product';
import NewProduct from './Pages/NewProduct/newProduct';
function App() {
  const user = useSelector(selectUser);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (user?.role === "Admin") {
      setIsAdmin(true)
    } else {
      setIsAdmin(false)
    }
  }, [user])
  return (
    <Routes>
      <Route path="/login" element={isAdmin ? <Home /> : <Login />}></Route>
      {user.role === "Admin" ? (
        <>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
        </>
      )
        : null
      }

      <Route path="/logout" element={<Logout />}></Route>
    </Routes>
  );
}

export default App;
