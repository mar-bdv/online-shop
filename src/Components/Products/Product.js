import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";

const Product = ({productProp}) =>{
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch()
    return(
        <div className="productsDiv">
            <img src={ `${productProp.img}.png` } alt="item"/>
            <div>
                <p className="par-description">{productProp.description}</p>
                <p className="par-name">{productProp.name}</p>
                <div className="price"> 
                    <p className="par-newPrice">{productProp.new_price} руб.</p>
                    
                    <p className="par-oldPrice"><del>{productProp.old_price === null ? '' : `${productProp.old_price} руб.` }</del></p>
                </div>
                <div className="buttons-plusMinus">
                    <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
                    {/* <button className="btn-plus">+</button>
                    <p className="par-plus">1</p> 
                    <button className="btn-plus minus">-</button> */}
                </div>
                <div className="btn-div">
                    <button onClick={() => {dispatch(addItemToCart({productProp, quantity})) }} 
                    className="btn">в корзину</button>
                </div>
            </div>
        </div>
    )
}

export default Product;