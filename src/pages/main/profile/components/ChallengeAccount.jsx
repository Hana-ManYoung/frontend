import { IoIosArrowForward } from "react-icons/io";
export default function ChallengeAccount() {
  return (
    <div className="w-[50%]">
      <div class="h-20 mt-4 pl-6 pr-4 py-3 text-gray-500 font-basic bg-gradient-to-r from-indigo-100 to-fuchsia-100 rounded-xl cursor-pointer shadow-md shadow-gray-200 hover:opacity-70 transition-all duration-300 ease-in-out flex justify-between items-center group">
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
          <div className="ml-2">
            <h2 className="text-lg">챌린지 적금</h2>
            <div className="text-center text-[0.55rem]">
              {/* 월 {savingData.monthlyMoney}원 ({savingData.remainMonth} 남음) */}
              진행 중인 챌린지가 없어요
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-5 text-lg text-gray-400">
            {/* <span className="text-gray-400">
              {savingData.currentMoney.toLocaleString("ko-KR")}원{" "}
            </span>
            <span className="black">
              / {savingData.targetMoney.toLocaleString("ko-KR")}원
            </span> */}
          </div>
          <IoIosArrowForward
            size="25"
            className="mr-1 text-gray-500 duration-300 group-hover:translate-x-2"
          />
        </div>
      </div>
    </div>
  );
}
