import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";

const Product = ({productProp}) =>{
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();
    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    return(
        <div className="productsDiv" key={productProp.id}>
            <img src={ `${productProp.img}.png` } alt="item"/>
            <div>
                <p className="par-description">{productProp.description}</p>
                <p className="par-name">{productProp.name}</p>
                <div className="price"> 
                    <p className="par-newPrice">{(numberWithSpaces(productProp.new_price)) }руб.</p>
                    
                    <p className="par-oldPrice"><del>{(numberWithSpaces(productProp.old_price === null ? '' : `${productProp.old_price} руб.`)) }</del></p>
                </div>
                <div className="buttons-plusMinus">
                    <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
                </div>
                <div className="btn-div">
                    <button onClick={() => {dispatch(addItemToCart({productProp, quantity})) }} 
                    className="btn">в корзину</button>
                </div>
            </div>
        </div>
    )
}
//{productProp.old_price === null ? '' : `${productProp.old_price} руб.` }
export default Product;