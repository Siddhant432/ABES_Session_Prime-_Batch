import { Link } from "react-router"

const NotFound=()=>{
    return(
        <div>
            <h2>Oops.. page not found</h2>
            <Link to="/">Home</Link>
        </div>
    )
}

export default NotFound