import TopBar from "../components/TopBar";
import { fetchReview } from "../components/api/fetchReview.api";
import { useState, useEffect } from "react";

function Home() {
  const [questions, setQuestions] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    await fetchReview().then((res) => {
      if (res) {
        setQuestions(res.data);
        setIsLoading(false);
        console.log(res.data);
      }
    });
  }, []);
  return (
    <>
      <TopBar />
      {isLoading ? (
        ""
      ) : (
        <>
          {Object.keys(questions).map((keyName, i: number) => {
            return (
              <div key={i}>
                <div>{questions[keyName].title}</div>
                <div>{questions[keyName].discription}</div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}

export default Home;
