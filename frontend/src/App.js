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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/shop-detail" element={<ShopDetail />}/>
      <Route path="/shop" element={<Shop />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/shop-grid" element={<ShopGrid />} />
      <Route path="/shoping-card" element={<ShopingCard />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/blog-details" element={<BlogDetails />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
    
  );
}

export default App;
