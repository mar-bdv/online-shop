import './App.css';
import Home from './Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import imageCart from './images/cartImg.png'
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';
import { getCartItems } from './Redux/cartSlice'
import { useSelector } from 'react-redux';
import { Contacts } from './Contacts';

function App() {
  const cartItems = useSelector(getCartItems);
  return (<Router>
    <div>
      <nav className='top-nav'>
        <Link to="/" className='sparkle link-nav'>sparkle</Link>
        <Link to="/products" className='link-nav'>Каталог</Link>
        <Link to="/contacts" className='link-nav'>Контакты</Link>
        


          {/* <label className="side-button-1" for="side-checkbox"></label> */}
        <Link className='cart-link' to="/cart"><img className='image-cart' src={imageCart} alt="cart"/><p className='cart-number'>{cartItems.length}</p></Link> 
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
    </div>

    <footer>
      <hr className="cart-hr"></hr>
      <p>Все материалы были взяты в учебных целях</p>
    </footer>
  </Router>);
}

export default App;
