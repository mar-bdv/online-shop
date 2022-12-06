import { useDispatch } from "react-redux";
import { dataBeauty } from "../Catalog/dataBeauty";
import image from './del-icon.png'
import { removeItemFromCart } from "../../Redux/cartSlice";

const CartItem = ({cartItem, index}) =>{
    const products = dataBeauty.find(item => item.id === cartItem.productId)
    const dispatch = useDispatch()
    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    return(
            <div className="cart-item-div" key={index}>
                <img className="cart-img" src={ `${products.img}.png` }alt="item"/>
                <div className="cart-text">
                    <p className="cart-description">{products.description}</p>
                    <p className="cart-name">{products.name}</p>
                    <p className="cart-quantity">{cartItem.quantity} шт.</p>
                </div>
                <div className="cart-price">
                    <p className="cart-new_price">{(numberWithSpaces(products.new_price * cartItem.quantity)) }  руб.</p>
                    <p className="cart-old_price"><del>{(numberWithSpaces(products.old_price === null ? '' : `${products.old_price * cartItem.quantity} руб.`)) } </del></p>
                </div>
                <div>
                    <span onClick={() => dispatch(removeItemFromCart({cartItemId : cartItem.id}))}>
                        <img  className="del-icon"  width="20px"  alt="icon" src={image}/>
                    </span>
                </div>
            </div>
            
    )
}
//{products.old_price === null ? '' : `${products.old_price * cartItem.quantity} руб.` }
export default CartItem;