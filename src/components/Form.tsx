import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { postReview } from "./api/postReview.api";

function Form() {
  const [cookies, setCookie, removeCookie] = useCookies([
    "purchase_date",
    "model",
  ]);
  const [formState, setFormState] = useState<object>({
    title: "",
    purchase_date: cookies.purchase_date | "情報がありません",
    review: "",
    discription: "",
    model: cookies.model | "情報がありません",
    create_at: "",
  });
  const [val, setVal] = useState<string>("5");

  const handleSubmit = async () => {
    console.log("test");

    try {
      const res = await postReview(formState);
      if (res) {
        console.log(res);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  return (
    <div className="flex flex-col items-center justify-center  p-3 bg-base-100">
      <label className="">
        <span className="label-text-text">Review title</span>
      </label>
      <input
        type="text"
        name="reviewTitle"
        placeholder="Type here ..."
        className="input input-bordered w-full max-w-xs bg-base-100"
        onChange={(e) => {
          setFormState({ ...formState, title: e.target.value });
          setVal(e.target.value);
        }}
      />
      <div className="mb-4">
        <label className="label">
          <span className="label-text">購入日</span>
        </label>
        {formState["purchase_date"]}
      </div>
      <div className="mb-4">
        評価数
        <div className="rating">
          {[...Array(5)].map((_, i: number) => {
            return (
              <input
                value={i + 1}
                key={i}
                onChange={(e) => {
                  setFormState({ ...formState, review: i + 1 });
                  setVal(e.target.value);
                }}
                type="radio"
                name={`rating-${i + 1}`}
                className="mask mask-star bg-orange-400"
                checked={i + 1 === Number(val)}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col">
        コメント
        <textarea
          onChange={(e) =>
            setFormState({ ...formState, discription: e.target.value })
          }
          className="textarea rounded"
        />
      </div>
      <div>
        モデル
        <div>{formState["model"]}</div>
      </div>

      <div className="mb-4">
        <button
          onClick={handleSubmit}
          className="btn btn-base-999 rounded-full"
        >
          送信
        </button>
      </div>
    </div>
  );
}
export default Form;
