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
  const [radioState, setRadioState] = useState<boolean>(true);
  const [isFormDirty, setIsFormDirty] = useState<boolean>(false);

  useEffect(() => {
    if (radioState && isFormDirty) {
      const formVal: any = {
        recommended: question.true,
        radioState: radioState,
        next_question: question.next_question,
      };
      setFormState(formVal);
    } else if (!radioState && isFormDirty) {
      const formVal: any = {
        recommended: question.false,
        radioState: radioState,
        next_question: question.next_question,
      };
      setFormState(formVal);
    }
  }, [radioState, isFormDirty]);

  return (
    <div className="flex flex-col items-center justify-center  p-10 bg-base-100">
      <div className="flex flex-row border-solid border-2 border-x-0 border-t-0 border-slate-700 pb-4">
        <div>Q{index}</div>
        <div>{question.text}</div>
      </div>
      <div className="flex flex-row">
        <label className="label cursor-pointer">
          <span className="label-text">はい</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-red-500"
            onChange={() => {
              setIsFormDirty(true);
              setRadioState(true);
            }}
          />
        </label>
        <label className="label cursor-pointer">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-red-500"
            onChange={() => {
              setIsFormDirty(true);
              setRadioState(false);
            }}
          />
          <span className="label-text">いいえ</span>
        </label>
      </div>
    </div>
  );
};

export default QuestionCard;
