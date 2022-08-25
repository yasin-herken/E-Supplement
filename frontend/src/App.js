import './App.css';
import Logo from './assets/img/logo.png';
function App() {
  return (

    <div>
      <div id="preloader">
        <div className='loade'></div>
      </div>
      <div className="humberger__menu__overlay">
        <div className='humberger__menu__wrapper'>
          <div className="humberger__menu__logo">
            <a href="#"><img src={Logo} alt="" /></a>
          </div>
          <div class="humberger__menu__cart">
            <ul>
              <li><a href="#"><i class="fa fa-heart"></i> <span>1</span></a></li>
              <li><a href="#"><i class="fa fa-shopping-bag"></i> <span>3</span></a></li>
            </ul>
            <div class="header__cart__price">item: <span>$150.00</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
