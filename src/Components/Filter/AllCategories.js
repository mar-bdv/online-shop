import Filter from "./Filter";
import { dataBeauty } from "../Catalog/dataBeauty";


const AllCategories = () =>{
    return(
        <div className="filter-div">
            {[`всё (${dataBeauty.length})`,'маски','сыворотки','патчи','очищение','уход для губ']
            .map((category, index) => <Filter key={index} category={category}/>)
            }
        </div>
    )
}
export default AllCategories;