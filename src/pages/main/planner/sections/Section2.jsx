import { IoMdSquare } from "react-icons/io";
import ConsumeRow from "../components/ConsumeRow";

export default function Section2({ useHistory, consumeData }) {
  return (
    <div className="w-full mt-10 px-8 py-8 rounded-xl text-gray-500 bg-gradient-to-r from-blue-100 to-lime-100  shadow-md">
      <div className="text-black flex justify-between items-end">
        <h2 className="text-2xl text-gray-600 font-bold">
          이용내역{" "}
          <span className="text-sm text-gray-500">
            오늘의 가계부를 작성해주세요!
          </span>
        </h2>
        <a
          href="/main/challenge"
          className="mr-4 text-xs border-b border-black cursor-pointer"
        >
          가계부 / 소비계획 챌린지
        </a>
      </div>
      <div className="mt-3 flex justify-between items-center">
        <div className="w-[39%] h-60 overflow-y-auto bg-white">
          <div className="w-[90%] py-2 mx-auto font-basic">
            <div className="pt-1 pb-2 border-b-2 flex justify-between items-center">
              <p className="text-xs ">2024.08.04 (금)</p>
              <img
                src={process.env.PUBLIC_URL + "/images/hana/hana_1q.jpg"}
                alt=""
                className="h-5"
              />
            </div>
            {consumeData.map((data, index) => (
              <ConsumeRow key={index} data={data} />
            ))}
          </div>
        </div>
        <div className="w-[59%] h-60 font-basic flex flex-col gap-5">
          <div className="bg-white py-5 rounded-xl flex-1 flex">
            <div className="w-[50%] px-5">
              <h3>이번달 수입</h3>
              <p className="mt-2 text-2xl font-bold text-hana flex justify-center items-center">
                {useHistory.income.toLocaleString("ko-KR")}원
              </p>
            </div>
            <div className="w-[50%] px-5">
              <h3>잔고</h3>
              <p className="mt-2 text-2xl font-bold bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-transparent bg-clip-text flex justify-center items-center">
                {useHistory.remain.toLocaleString("ko-KR")}원
              </p>
            </div>
          </div>
          <div className="bg-white py-5 rounded-xl flex-1 flex">
            <div className="w-[50%] px-5">
              <h3>이번달 소비</h3>
              <p className="mt-2 text-2xl font-bold text-orange-500 flex justify-center items-center">
                {useHistory.consume.toLocaleString("ko-KR")}원
              </p>
            </div>
            <div className="w-[50%] px-5">
              <h3>가장 많은 지출</h3>
              <p className="mt-3 text-xl flex justify-center items-center">
                <IoMdSquare className="text-orange-500" size="25" />
                {useHistory.most.type}{" "}
                {useHistory.most.amount.toLocaleString("ko-KR")}원
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
