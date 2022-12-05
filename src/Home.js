import arrow from "./images/arrow-btn.png"
import { Link } from "react-router-dom"

function Home(){
    return(<div className="home-div">
        <div className="center-home">
            <p className="p-home-top">sparkle</p>
            <hr className="home-hr"></hr>
            <p className="home-text">красота, вдохновленная реальной жизнью</p>
            <Link to="/products">
            <button className="home-btn">
            Перейти в каталог⠀ 
            <img src={arrow} alt="arrow"/>
            </button>
            </Link>
        </div>
        
        {/* <img className="girl-back" src={girl} alt="girl"/> */}

    </div>)
}


export default Home