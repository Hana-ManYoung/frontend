import ConsumeRow from "../components/ConsumeRow";
import { consumeData } from "../data/consumeData";
import { IoMdSquare } from "react-icons/io";

export default function Planner() {
  return (
    <div className="relative h-full min-h-[calc(100vh-78px)] bg-hana animate__animated animate__fadeIn">
      <div className="w-full max-w-[1024px] min-h-[calc(100vh-78px)] mx-auto py-6 bg-white shadow-xl flex flex-col">
        <div className="w-[90%] mx-auto">
          <Section1 />
          <Section2 />
          <Section3 />
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="w-full px-8 py-8 bg-stone-50 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold">내 소비 동향</h1>
      <div className="w-full mt-4 flex">
        <div className="w-[30%] text-center">
          <img src="/ayj2.png" width="100%" alt="" />
          <p className="text-lg mt-2">간편 소비가 최고!</p>
        </div>
        <div className="w-[70%] flex justify-center items-center bg-slate-300 text-xl">
          bar chart
        </div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="w-full mt-10 px-8 py-8 rounded-xl bg-stone-50 shadow-md">
      <div className="flex justify-between items-end">
        <h2 className="text-2xl font-bold">
          이용내역{" "}
          <span className="text-sm text-gray-500">
            오늘의 가계부를 작성해주세요!
          </span>
        </h2>
        <a
          href="/main/challenge"
          className="mr-4 text-xs border-b border-black cursor-pointer"
        >
          가계부 챌린지
        </a>
      </div>
      <div className="mt-2 flex justify-between items-center">
        <div className="w-[39%] h-60 overflow-y-auto bg-white">
          <div className="w-[90%] py-2 mx-auto font-basic">
            <div className="pt-1 pb-2 border-b-2 flex justify-between items-center">
              <p className="text-xs ">2024.08.04 (금)</p>
              <img src="/hana_1q.jpg" alt="" className="h-5" />
            </div>
            {consumeData.map((data, index) => (
              <ConsumeRow key={index} data={data} />
            ))}
          </div>
        </div>
        <div className="w-[59%] h-60 font-basic flex flex-col gap-5">
          <div className="bg-white py-5 flex-1 flex">
            <div className="w-[50%] px-5">
              <h3>이번달 수입</h3>
              <p className="mt-2 text-2xl text-hana flex justify-center items-center">
                570,000원
              </p>
            </div>
            <div className="w-[50%] px-5">
              <h3>잔고</h3>
              <p className="mt-2 text-2xl flex justify-center items-center">
                324,600원
              </p>
            </div>
          </div>
          <div className="bg-white py-5 flex-1 flex">
            <div className="w-[50%] px-5">
              <h3>이번달 소비</h3>
              <p className="mt-2 text-2xl text-orange-500 flex justify-center items-center">
                254,400원
              </p>
            </div>
            <div className="w-[50%] px-5">
              <h3>가장 많은 지출</h3>
              <p className="mt-3 text-xl flex justify-center items-center">
                <IoMdSquare className="text-orange-500" size="25" />
                식비 145,500원
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="w-full mt-10 px-8 py-8 rounded-xl bg-stone-50 shadow-md">
      <h1 className="text-2xl font-bold">월별 가계부</h1>
      <div className="w-full h-44 mt-10 bg-slate-200 flex items-center justify-center">
        Plot chart
      </div>
    </div>
  );
}
