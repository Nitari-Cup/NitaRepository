const Recommend = ({text}: {text: string}) => {
  return (
    <div className="w-screen">
      <div className="p-5 mt-20 bg-base-content text-neutral-content">
        <div className="font-extrabold text-6xl text-left whitespace-nowrap">あなたにおすすめ</div>
      </div>
      <div className="text-center pt-10 pb-10 text-2xl font-extrabold text-xl bg-gray-100">
            {text}
        </div>
    </div>
  );
};

export default Recommend;
