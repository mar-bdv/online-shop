import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getSalePrice, getTotalPrice } from "../../Redux/cartSlice";

const Cart = () =>{
    const totalPrice = useSelector(getTotalPrice)
    const cartItems = useSelector(getCartItems);
    const salePrice = useSelector(getSalePrice)
    return(
        <div>
            <div>
                <h2 className="cart-h2">корзина / {cartItems.length} шт.</h2>
                <hr className="cart-hr"></hr>
            </div>
            <div className="cart-BigDiv">
                {cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)}
            </div>
            <div className="footer-price">
                <h2>Всего: {totalPrice} руб.</h2>
                <p>Вы сэкономили: {salePrice} руб.</p>
            </div>
        </div>
    )
}

export default Cart;