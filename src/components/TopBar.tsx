import { Link } from "react-router-dom"

function TopBar(){
    return(
        <div>
            <Link to="/">
                <button className="btn btn-ghost">Home Page</button>
            </Link>
            <Link to="/inputreview">
                <button className="btn btn-ghost">InputReview Page Page</button>
            </Link>
            <Link to="/review">
                <button className="btn btn-ghost">Review Page Page</button>
            </Link>
            <Link to="/*">
            </Link>
        </div>
    )
}

export default TopBar
