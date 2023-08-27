import { useState, useEffect } from "react";

interface Question {
  id: string;
  true: string;
  false: string;
  text: string;
  next_question: string;
}

const QuestionCard = ({
  question,
  index,
  setFormState,
}: {
  question: Question;
  index: number;
  setFormState: any;
}) => {
  const [answer, setAnswer] = useState<boolean>(true);
  const [isFormDirty, setIsFormDirty] = useState<boolean>(false);

  useEffect(() => {
    setIsFormDirty(false);

    if (isFormDirty) {
      if (answer) {
        const formVal: any = {
          recommended: question.true,
          next_question: question.next_question,
          is_end: false,
        };
        console.log(formVal);
        setFormState(formVal);
      }
      if (!answer) {
        const formVal: any = {
          recommended: question.false,
          next_question: question.next_question,
          is_end: true,
        };

        console.log(formVal);
        setFormState(formVal);
      }
    }
  }, [answer, isFormDirty]);

  return (
    <div className="w-full items-end justify-center mt-20">
      <div className="grid grid-cols-4 p-5 bg-base-content text-neutral-content">
        <div className="font-extrabold text-6xl text-right">Q{index}</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="whitespace-nowrap mt-10 text-xl font-extrabold text-5xl">
          {question.text}
        </div>
      </div>
      <div className="flex flex-row justify-evenly mt-10">
        <button
          onClick={() => {
            setIsFormDirty(true);
            setAnswer(true);
          }}
          className="btn btn-active btn-info text-lg hover:bg-sky-700"
        >
          はい
        </button>
        <button
          onClick={() => {
            setIsFormDirty(true);
            setAnswer(false);
          }}
          className="btn btn-active btn-neutral"
        >
          いいえ
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
