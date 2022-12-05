const ChangeQuantity = ({quantity, setQuantity}) =>{
    const addQuantity = () =>{
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }
    const removeQuantity = () =>{
        if(quantity <=1 ) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity)
    }
    return(
        <div className="buttons-plusMinus">
            <button onClick={addQuantity} className="btn-plus">+</button>
            <p className="par-plus">{quantity}</p> 
            <button onClick={removeQuantity} className="btn-plus minus">-</button> 
        </div>
    )
}

export default ChangeQuantity;