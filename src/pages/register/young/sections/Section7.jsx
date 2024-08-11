import { checkCards } from "../../../../data/checkCards";
export default function Section7({ selectCard, setSelectCard, onOpen }) {
  return (
    <div className="w-full">
      <p className="text-xl">디자인을 선택해주세요</p>
      <div className="mt-14 flex justify-evenly">
        {checkCards.map((card, i) => (
          <div
            key={i}
            className={
              "w-[22.5%] flex flex-col items-center hover:scale-125 hover:opacity-100 transition-transform duration-500 ease-in-out cursor-pointer" +
              (selectCard === i ? " opacity-100 scale-125" : " opacity-50")
            }
            onClick={() => {
              setSelectCard(i);
            }}
          >
            <img
              src={process.env.PUBLIC_URL + card.image}
              className="shadow-md shadow-gray-700 rounded-md"
              alt=""
            />
            <div className="mt-6">{card.name}</div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12" onClick={onOpen}>
        <span className="text-xl border-b-black border-b px-3 cursor-pointer">
          상품 정보 확인하기
        </span>
      </div>
    </div>
  );
}
