import QuestionCard from "../components/QuestionCard";
import TopBar from "../components/TopBar";
import { fetchQuestion } from "../components/api/fetchQuestion.api";
import { useState, useEffect } from "react";

interface FormState {
  radioState: boolean;
  recommended: string;
  next_question: string;
}

function Home() {
  const [questions, setQuestions] = useState({});
  const [formState, setFormState] = useState<FormState>({
    radioState: true,
    recommended: "",
    next_question: "",
  });

  const fetchData = async () => {
    try {
      const res = await fetchQuestion();
      if (res) {
        setQuestions(res.data);
      } else {
        console.log("error while fetching");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
    if(formState.next_question != "0"){
      console.log(formState)
    }
  }, [formState]);

  return (
    <>
      <TopBar />
      {Object.keys(questions).map((keyName, i: number) => {
        return (
          <QuestionCard
            question={questions[keyName]}
            key={i}
            index={i + 1}
            setFormState={setFormState}
          />
        );
      })}
    </>
  );
}

export default Home;
