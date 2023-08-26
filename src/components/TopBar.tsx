import { Link } from "react-router-dom"

function TopBar(){
    return(
        <div className="w-full  bg-base-300 flex justify-center">
            <Link to="/">
                <button className="btn btn-ghost flex-1">Home</button>
            </Link>
            <Link to="/inputreview">
                <button className="btn btn-ghost flex-1">InputReview</button>
            </Link>
            <Link to="/review">
                <button className="btn btn-ghost flex-1">Review</button>
            </Link>
            <Link to="/*">
            </Link>
        </div>
    )
}

export default TopBar
