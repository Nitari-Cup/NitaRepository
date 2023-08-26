interface Review {
  purchase_date: string;
  review: string;
  title: string;
  discription: string;
  model: string;
  create_at: string;
}

function ReviewCard({ review }: { review: Review }) {
  console.log(review);

  return (
    <div className="card max-w- bg-base-200 flex justify-center m-10 col-span-6">
      <div className="card-body">
        <h1 className="card-title">{review.title}</h1>
        <div className="flex flex-row">
          <div className="rating rating-md">
            {[...Array(Number(review.review))].map((_, i: number) => {
              return (
                <input
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400 "
                  key={i}
                />
              );
            })}
          </div>
          <h2 className="w-full text-right">購入日: {review.purchase_date}</h2>
        </div>
        <h2 className="">モデル: {review.model}</h2>
        <p>{review.discription}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
