import ReviewCard from "../components/ReviewCard";
import TopBar from "../components/TopBar";
import { useEffect, useState } from "react";
import { fetchReview } from "../components/api/fetchReview.api";

function Review() {
  const [reviews, setReviews] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetchReview();
      if (res) {
        setReviews(res.data);
        setIsLoading(false);
      } else {
        console.log("error while fetching");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <TopBar />
      {isLoading ? (
        ""
      ) : (
        <div className="grid grid-cols-12  content-center ">
          <>
            {Object.keys(reviews).map((keyName, i) => {
              return <ReviewCard key={i} review={reviews[keyName]} />;
            })}
          </>
        </div>
      )}
    </div>
  );
}
export default Review;
