import  { dataBeauty }  from "../Catalog/dataBeauty";
import  Product  from "./Product"
import imageGirl from './background-catalog.png'
import AllCategories from "../Filter/AllCategories";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../Redux/beautyItemsSlice";

const Products = () =>{
    const selectedCategory = useSelector(getSelectedCategory)
    return(<div>
        
        <div className="image-div">
            <img alt="girl" className="catalog-image-girl" src={imageGirl}/>
            <p className="center-text-catalog-par">КАТАЛОГ</p>
        </div>
            <AllCategories/>
        
        <div className="productsBigDiv">
            
            {dataBeauty
            .filter(product =>{
                if(selectedCategory === `всё (${dataBeauty.length})`) return true
                return selectedCategory === product.category
            })
            .map((allProducts) => <Product key={allProducts.id} productProp={allProducts}/>)}
        </div>
    </div>)
}


export default Products;
