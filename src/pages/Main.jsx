import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();
  return (
    <div className="relative w-screen h-full min-h-[calc(100vh-78px)] bg-hana animate__animated animate__fadeIn">
      <div className="w-full max-w-[1024px] min-h-[calc(100vh-78px)] mx-auto py-6 bg-white shadow-xl flex flex-col">
        <div className="w-[90%] mx-auto">
          <div className="mt-4 text-2xl">
            <h1 className="flex items-center">
              오늘의 <strong className="mx-2 text-red-500">챌린지</strong>가
              기다리고 있어요{" "}
              <img src="/flame.png" width="35px" className="ml-1" alt="" />
            </h1>
            <div className="mt-5 text-center text-lg">
              <p>
                <strong>규은</strong>님의 소비 유형
              </p>
              <img
                src="/ayj2.png"
                width="25%"
                className="mt-4 mx-auto"
                alt=""
              />
              <p className="mt-2">
                <strong className="text-blue-500"> 간편 소비형</strong>
              </p>
              <div
                className="w-[50%] mt-4 mx-auto py-4 text-center text-2xl text-black bg-slate-200 shadow-md shadow-gray-400 rounded-2xl cursor-pointer hover:bg-slate-300 transition-all duration-300 ease-in-out"
                onClick={() => navigate("/main/planner")}
              >
                내 소비동향 확인하기
              </div>
            </div>
          </div>
          <div className="mt-16 text-2xl">
            <h2 className="flex items-center">
              규은님이 필요할 것 같아 준비했어요
              <img src="/smile.png" width="30px" className="ml-1" alt="" />
            </h2>
            <div className="w-full mt-6 text-center flex flex-wrap justify-around">
              <MainCard name={"가계부"} id={1} />
              <MainCard name={"챌린지"} id={2} />
              <MainCard name={"랭킹"} id={3} />
              <MainCard name={"채팅"} id={4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainCard({ name, id }) {
  return (
    <div
      className={
        "md:w-[20%] h-36 mx-4 px-4 py-4 text-2xl text-white bg-slate-400 rounded-xl flex items-end cursor-pointer shadow-lg shadow-gray-600 hover:opacity-85 transition-all duration-300 ease-in-out " +
        (id % 2 === 0 ? "btn-hana-blue" : "btn-hana-green")
      }
    >
      {name}
    </div>
  );
}
