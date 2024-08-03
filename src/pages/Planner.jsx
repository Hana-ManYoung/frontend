import { useNavigate } from "react-router-dom";

export default function Planner() {
  const navigate = useNavigate();
  return (
    <div className="relative w-screen h-full min-h-[calc(100vh-78px)] bg-hana animate__animated animate__fadeIn">
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
    <div className="w-full px-6 py-8">
      <h1 className="text-2xl font-bold">내 소비 동향</h1>
      <div className="w-full mt-4 flex">
        <div className="w-[30%] text-center">
          <img src="/ayj2.png" width="100%" alt="" />
          <p className="text-lg mt-2">간편 소비가 최고!</p>
        </div>
        <div className="w-[70%] flex justify-center items-center bg-slate-300 text-xl">
          그래프
        </div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="w-full px-6 py-8 rounded-lg">
      <h1 className="text-2xl font-bold">이번달 수입 및 잔고</h1>
      <div className="w-full mt-10 flex">
        <div className="w-[30%] mx-auto">
          <h3 className="text-xl">수입</h3>
          <div className="text-right text-lg text-blue-500">
            <div>
              <p>+500,000 원</p>
              <p>+ 70,000 원</p>
            </div>
            <p className="text-xl text-gray-500">570,000 원</p>
          </div>
        </div>
        <div className="h-auto border-2"></div>
        <div className="w-[30%] mx-auto">
          <h3 className="h-full text-xl flex">
            잔고
            <div className="text-3xl text-hana flex items-center">
              324,600원
            </div>
          </h3>
        </div>
      </div>
      <h1 className="mt-4 text-2xl font-bold">이번달 지출 현황</h1>
      <div className="mt-6 w-full flex">
        <div className="w-[35%] mx-auto text-center text-2xl text-red-500">
          245,400 원
        </div>
        <div className="h-auto border-2"></div>
        <div className="w-[35%] mx-auto text-lg flex items-center">
          가장 많은 지출{" "}
          <div className="pl-3 flex justify-evenly items-center">
            <div className="w-4 h-4 mr-1 rounded-md bg-orange-500"></div>식비
            145,5000 원
          </div>
        </div>
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="w-full px-6 py-8 rounded-lg">
      <h1 className="text-2xl font-bold">이번달 수입 및 잔고</h1>
      <div className="w-full mt-10 flex">
        <div className="w-[30%] mx-auto">
          <h3 className="text-xl">수입</h3>
          <div className="text-right text-lg text-blue-500">
            <div>
              <p>+500,000 원</p>
              <p>+ 70,000 원</p>
            </div>
            <p className="text-xl text-gray-500">570,000 원</p>
          </div>
        </div>
        <div className="h-auto border-2"></div>
        <div className="w-[30%] mx-auto">
          <h3 className="h-full text-xl flex">
            잔고
            <div className="text-3xl text-hana flex items-center">
              324,600원
            </div>
          </h3>
        </div>
      </div>
      <h1 className="mt-4 text-2xl font-bold">이번달 지출 현황</h1>
      <div className="mt-6 w-full flex">
        <div className="w-[35%] mx-auto text-center text-2xl text-red-500">
          245,400 원
        </div>
        <div className="h-auto border-2"></div>
        <div className="w-[35%] mx-auto text-lg flex items-center">
          가장 많은 지출{" "}
          <div className="pl-3 flex justify-evenly items-center">
            <div className="w-4 h-4 mr-1 rounded-md bg-orange-500"></div>식비
            145,5000 원
          </div>
        </div>
      </div>
    </div>
  );
}
