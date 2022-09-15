import './App.css';
import Home from './Pages/home.js';
import {Routes,Route} from 'react-router-dom';
import ShopDetail from './Pages/shopDetail';
import Contact from './Pages/contact.js';
import ShopGrid from './Pages/shopGrid';
import ShopingCard from './Pages/shopingCard';
import Checkout from './Pages/checkout';
import Shop from './Pages/shop';
import BlogDetails from './Pages/blogDetails';
import Blog from './Pages/blog';
import Favorites from './Pages/favorites';
import SignUp from './Pages/signup';
import { useSelector } from "react-redux";
import ProductDetails from './Pages/productDetails';
import { useEffect } from 'react';

function App() {
  const user = useSelector((state) => state.user);
  useEffect(()=>{
    console.log(user);
  },[user])  
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/shop-detail" element={<ShopDetail />}/>
      <Route path="/shop" element={<Shop />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/shop-grid" element={<ShopGrid />} />
      <Route path="/shoping-card" element={<ShopingCard />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/blog-details" element={<BlogDetails />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/product-details" element={<ProductDetails/>} />
    </Routes>
    
  );
}

export default App;
