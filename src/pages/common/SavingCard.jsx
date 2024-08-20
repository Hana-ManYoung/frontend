import { IoIosArrowForward } from "react-icons/io";
export default function SavingCard({ savingData, handleClick }) {
  return (
    <div
      class="h-20 mt-4 pl-6 pr-4 py-3 font-basic bg-gradient-to-r from-indigo-100 to-fuchsia-100 rounded-xl cursor-pointer shadow-md shadow-gray-200 hover:opacity-70 transition-all duration-300 ease-in-out flex justify-between items-center group"
      onClick={() => handleClick(1)}
    >
      <div className="flex items-center">
        <div>
          <div className="bg-white rounded-full">
            <img
              src={process.env.PUBLIC_URL + "/images/challenge/account.png"}
              alt=""
              className="w-7 p-[0.2rem]"
            />
          </div>
        </div>
        <div className="ml-2 text-gray-500">
          <h2 className="text-lg">{savingData.name}</h2>
          <div className="text-center text-[0.55rem]">
            월 {savingData.monthlyMoney}원 ({savingData.remainMonth} 남음)
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="mr-5 text-lg">
          <span className="text-gray-400">
            {savingData.currentMoney.toLocaleString("ko-KR")}원{" "}
          </span>
          <span className="black">
            / {savingData.targetMoney.toLocaleString("ko-KR")}원
          </span>
        </div>
        <IoIosArrowForward
          size="25"
          className="mr-1 text-gray-500 duration-300 group-hover:translate-x-2"
        />
      </div>
    </div>
  );
}
