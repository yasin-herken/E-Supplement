import './App.css';
import Home from './Pages/home.js';
import {Routes,Route} from 'react-router-dom';
import ShopDetail from './Pages/shopDetail';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/shop-detail" element={<ShopDetail />}/>
    </Routes>
    
  );
}

export default App;
