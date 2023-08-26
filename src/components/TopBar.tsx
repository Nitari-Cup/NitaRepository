import { Link } from "react-router-dom"
function TopBar(){
    return(
        <div className="flex justify-center">
            <Link to="/">
                <button className="btn btn-ghost">Home</button>
            </Link>
            <Link to="/inputreview">
                <button className="btn btn-ghost">InputReview</button>
            </Link>
            <Link to="/review">
                <button className="btn btn-ghost">Review</button>            </Link>
            <Link to="/*">
            </Link>
        </div>
    )
}

export default TopBar