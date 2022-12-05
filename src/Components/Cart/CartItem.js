import { useDispatch } from "react-redux";
import { dataBeauty } from "../Catalog/dataBeauty";
import image from './del-icon.png'
import { removeItemFromCart } from "../../Redux/cartSlice";

const CartItem = ({cartItem}) =>{
    const products = dataBeauty.find(item => item.id === cartItem.productId)
    const dispatch = useDispatch()
    return(
            <div className="cart-item-div">
                <img className="cart-img" src={ `${products.img}.png` }alt="item"/>
                <div className="cart-text">
                    <p className="cart-description">{products.description}</p>
                    <p className="cart-name">{products.name}</p>
                    <p className="cart-quantity">{cartItem.quantity} шт.</p>
                </div>
                <div className="cart-price">
                    <p className="cart-new_price">{products.new_price * cartItem.quantity} руб.</p>
                    <p className="cart-old_price"><del>{products.old_price === null ? '' : `${products.old_price * cartItem.quantity} руб.` }</del></p>
                </div>
                <div>
                    <span onClick={() => dispatch(removeItemFromCart({cartItemId : cartItem.id}))}>
                        <img width="20px" className="del-icon"  alt="icon" src={image}/>
                    </span>
                </div>
            </div>
            
    )
}

export default CartItem;