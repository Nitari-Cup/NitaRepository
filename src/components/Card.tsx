import { useFetchReview } from '../hooks/useFetchReview';

function Card() {
  const reviewData = useFetchReview();

  console.log('reviewData:', reviewData);

  return (
    <div className="card bg-base-200 flex justify-center">
      <div className="card-body">
        <h1 className="card-title">Card title</h1>
        <div className="rating rating-lg">
          {/* Your rating inputs here */}
        </div>
        {reviewData && Object.keys(reviewData).length > 0 && (
          <>
            {Object.keys(reviewData).map((key) => (
              <div key={key}>
                <h2>{reviewData[key].purchase_date}</h2>
                <h2>{reviewData[key].review}</h2>
                <h2>{reviewData[key].model}</h2>
                <h3>{reviewData[key].title}</h3>
                <p>{reviewData[key].create_at}</p>
                <p>{reviewData[key].discription}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
