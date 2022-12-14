import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home.js';
import Login from './Pages/Login/login';
import { useSelector } from "react-redux";
import Logout from './Pages/Logout/logout';
import UserList from './Pages/UserList/userList';
import User from './Pages/User/user';
import NewUser from './Pages/NewUser/newUser';
import ProductList from './Pages/ProductList/productList';
import Product from './Pages/Product/product';
import NewProduct from './Pages/NewProduct/newProduct';
import { selectUser } from './Redux/userRedux';
function App() {
  const user = useSelector(selectUser);
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      
      {user?.role === "Admin" ? (
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
        : <Route path="/" element={<Home />} />
      }

      <Route path="/logout" element={<Logout />}></Route>
    </Routes>
  );
}

export default App;
