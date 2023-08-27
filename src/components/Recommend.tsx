const Recommend = ({text}: {text: string}) => {
  return (
    <div className="w-screen">
      <div className="p-5 bg-base-content text-neutral-content">
        <div className="font-extrabold text-6xl text-left whitespace-nowrap">あなたにおすすめ</div>
        <div className="text-center mt-10 text-xl font-extrabold text-xl">
            {text}
        </div>
      </div>
    </div>
  );
};

export default Recommend;
