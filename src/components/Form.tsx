import { useEffect, useState } from "react";

function Form() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData.entries());
    console.log(formObject);
  };

  const [formState, setFormState] = useState<object>({
    title: "",
    purchase_date: "",
    review: "",
    discription: "",
    model: "",
    create_at: "",
  });

  const [val, setVal] = useState<string>("5");

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form className="mb-4" onSubmit={handleSubmit}>
        <label>
          レビュータイトル
          <input
            type="text"
            name="reviewTitle"
            placeholder=""
            className="input input-bordered w-full max-w-xs bg-gray-100"
            onChange={(e) => {
              setFormState({ ...formState, title: e.target.value });
              setVal(e.target.value);
            }}
          />
        </label>
      </form>
      <div className="mb-4">
        購入日
        <input type="date" />
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
                  setVal(e.target.value)
                }}
                type="radio"
                name={`rating-${i + 1}`}
                className="mask mask-star"
                checked={i + 1 === Number(val)}
              />
            );
          })}
        </div>
      </div>
      <div className="mb-4">
        スペック
        <br />
        モデル
        <select className="w-full max-w-xs select select-bordered bg-gray-100">
          <option disabled selected>
            モデル
          </option>
          <option>13インチAir（M1）</option>
          <option>13インチAir（M2）</option>
          <option>15インチAir（M2）</option>
          <option>13インチPro（M2）</option>
          <option>14インチPro（M2Pro、M2Max）</option>
          <option>16インチPro（M2Pro、M2Max）</option>
        </select>
        <br />
        メモリ
        <select className="w-full max-w-xs select select-bordered bg-gray-100">
          <option disabled selected>
            メモリ
          </option>
          <option>8GB</option>
          <option>16GB</option>
          <option>24GB</option>
        </select>
        <br />
        SSD
        <select className="w-full max-w-xs select select-bordered bg-gray-100">
          <option disabled selected>
            SSD
          </option>
          <option>256GB</option>
          <option>512GB</option>
          <option>1TB</option>
        </select>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            レビュー
            <br />
            <input
              type="text"
              name="reviewText"
              placeholder=""
              className="input input-bordered w-full max-w-xs bg-gray-100"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            送信
          </button>
        </form>
      </div>
    </div>
  );
}
export default Form;
