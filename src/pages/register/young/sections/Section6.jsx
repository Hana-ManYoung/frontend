export default function Section6({ onOpen }) {
  return (
    <div className="w-full">
      <h2 className="text-xl mt-6">영하나플러스 통장</h2>
      <div className="relative pt-2">
        <div className="w-[80%] h-full absolute mx-auto left-0 right-0 text-sm text-center text-gray-600 flex justify-center items-center">
          <p className="flex-1 pr-2">
            YOUTH고객
            <br />
            전용통장
          </p>
          <p className="flex-1">
            용돈 받으면
            <br />
            수수료 우대
            <br />
            혜택까지~
          </p>
          <p className="flex-1">
            체크카드 사용하고
            <br />
            수수료 우대
            <br />
            혜택까지~
          </p>
          <p className="flex-1 pl-2">
            나의 첫거래
            <br />
            은행~
          </p>
        </div>
        <img
          src={process.env.PUBLIC_URL + "/images/hana/young_account.png"}
          className="w-[85%] mx-auto mt-4"
          alt=""
        />
      </div>
      <div className="text-center mt-6">
        젊은 그대, 당신을 위한 Must Have 통장
      </div>
      <div className="mt-4 text-center" onClick={onOpen}>
        <span className="px-3 text-xl border-b border-black cursor-pointer">
          상품 정보 확인하기
        </span>
      </div>
    </div>
  );
}
