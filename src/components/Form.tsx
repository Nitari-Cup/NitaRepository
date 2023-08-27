import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { postReview } from "./api/postReview.api";

interface FormState {
  title: string;
  purchase_date: string;
  review: string;
  discription: string;
  model: string;
  create_at: string;
}

function Form() {
  const [cookies] = useCookies(["purchase_date", "model"]);

  const initialState: FormState = {
    title: "",
    purchase_date: cookies.purchase_date || "情報がありません",
    review: "",
    discription: "",
    model: cookies.model || "情報がありません",
    create_at: "",
  };

  const [formState, setFormState] = useState<FormState>(initialState); // Fixed the type here
  const [val, setVal] = useState<string>("5");
  const [isPostSucceeded, setIsPostSucceeded] = useState<boolean>(false);

  const handleSubmit = async () => {
    try {
      const res = await postReview(formState);
      if (res) {
        console.log(res);
        setFormState(initialState);
        setIsPostSucceeded(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  return (
    <div className="flex flex-col items-center justify-center  p-10 bg-base-100">
      <div className="card max-w-sm bg-base-200 flex justify-center mb-5">
        <div className="card-body flex flex-col">
          <div className="flex flex-col border-solid border-2 border-x-0 border-t-0 border-slate-700 pb-4">
            <div className="flex flex-row ">
              <span className="label-text font-bold font-mono ">
                Please Type your review!!
              </span>
              <div className="mb-4 pt-4">
                <button onClick={handleSubmit} className="btn btn-base-100 ">
                  送信
                </button>
              </div>
            </div>
            <div className="rating mx-auto my-0 border-solid ">
              {[...Array(5)].map((_, i: number) => {
                return (
                  <input
                    value={i + 1}
                    key={i}
                    onChange={(e) => {
                      setFormState({ ...formState, review: String(i + 1) });
                      setVal(e.target.value);
                    }}
                    type="radio"
                    name={`rating-${i + 1}`}
                    className="mask mask-star bg-orange-400 p-4"
                    checked={i + 1 === Number(val)}
                  />
                );
              })}
            </div>
          </div>
          <div className="border-solid border-2 border-x-0 border-t-0 border-slate-700 pb-">
            <input
              type="text"
              name="reviewTitle"
              placeholder="タイトル"
              value={formState.title}
              className="input appearance-none bg-transparent border-none focus:outline-none w-full max-w-xs bg-base-100 "
              onChange={(e) => {
                setFormState({ ...formState, title: e.target.value });
                setVal(e.target.value);
              }}
            />
          </div>
          <textarea
            value={formState.discription}
            onChange={(e) =>
              setFormState({ ...formState, discription: e.target.value })
            }
            placeholder="コメント"
            className="textarea textarea-lg w-full max-w-xs mt-4"
          />
          {isPostSucceeded && (
            <div className="alert alert-success">
              <span>Review sent successfully.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Form;
