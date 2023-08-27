import QuestionCard from "../components/QuestionCard";
import TopBar from "../components/TopBar";
import { fetchQuestion } from "../components/api/fetchQuestion.api";
import { useState, useEffect } from "react";
import Recommend from "../components/Recommend";

interface Question {
  id: string;
  text: string;
  true: string;
  false: string;
  next_question: string;
}

interface FormState {
  recommended: string;
  next_question: string;
  is_end: boolean;
}

function Home() {
  const [questions, setQuestions] = useState<{ [key: string]: Question }>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [formState, setFormState] = useState<FormState>({
    recommended: "0",
    next_question: "1",
    is_end: false,
  });

  const fetchData = async () => {
    try {
      const res = await fetchQuestion();
      if (res) {
        setQuestions(res.data);
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
    <>
      <TopBar />
      <div className="h-screen flex justify-center">
        {(() => {
          if (
            !isLoading &&
            !formState.is_end &&
            formState.next_question !== "0"
          ) {
            const nextQuestionIndex = formState.next_question;
            const nextQuestion = questions[nextQuestionIndex];
            if (nextQuestion) {
              return (
                <QuestionCard
                  question={nextQuestion}
                  index={Number(nextQuestionIndex)}
                  setFormState={setFormState}
                />
              );
            }
          } else if (
            (!isLoading && formState.is_end) ||
            formState.next_question === "0"
          ) {
            return <Recommend text={formState.recommended} />;
          }
        })()}
      </div>
    </>
  );
}

export default Home;
