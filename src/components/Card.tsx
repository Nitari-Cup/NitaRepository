import { useFetchReview } from '../hooks/useFetchReview';
import StarRating from './StarRating';

function Card() {
  const reviewData = useFetchReview();

  console.log('reviewData:', reviewData);

  return (
    <div>
      {reviewData && Object.keys(reviewData).length > 0 && (
        <>
          {Object.keys(reviewData).map((key) => (
            <div key={key}>
              <div className="card bg-base-200 flex justify-center">
                <h1 className="card-title">{reviewData[key].title}</h1>
                <StarRating review={reviewData[key].review} />
                <h2>{reviewData[key].purchase_date}</h2>
                <h2>{reviewData[key].model}</h2>
                <p>{reviewData[key].create_at}</p>
                <p>{reviewData[key].discription}</p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Card;
