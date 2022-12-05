import Filter from "./Filter";

const AllCategories = () =>{
    return(
        <div className="filter-div">
            {['всё(27)','маски','сыворотки','патчи','очищение','уход для губ']
            .map(category => <Filter category={category}/>)
            }
        </div>
    )
}
export default AllCategories;