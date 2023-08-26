

function Card() {
    return (
        <div className="card bg-base-200 flex justify-center">
            <div className="card-body">
                <h1 className="card-title">Card title</h1>
                <div className="rating rating-lg">
                    <input name="rating-8" className="mask mask-star-2 bg-orange-400" />
                    <input name="rating-8" className="mask mask-star-2 bg-orange-400" />
                    <input name="rating-8" className="mask mask-star-2 bg-orange-400" />
                    <input name="rating-8" className="mask mask-star-2 bg-orange-400" />
                    <input name="rating-8" className="mask mask-star-2 bg-orange-400" />
                </div>
                <h2 className="">08/26</h2>
                <h2 className="">スペック</h2>
                <h3 className="">Review</h3>
                <p>This MacBook is great!</p>
            </div>
        </div>
    )
}

export default Card;