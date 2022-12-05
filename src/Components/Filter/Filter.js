import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategory, filterCategory } from "../../Redux/beautyItemsSlice";

const Filter = ({category}) =>{
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory)
    return(
        <div >
            <p onClick={() =>{dispatch(filterCategory(category))}}
            className={selectedCategory === category ? 'categoryButtonSelected categoryButton' : 'categoryButton'}>
                {category}
            </p>
        </div>
    )
}
export default Filter;