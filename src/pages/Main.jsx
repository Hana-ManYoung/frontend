import { useNavigate } from "react-router-dom";
import MainCard from "../components/MainCard";
// import Footer from "../components/Footer";

export default function Main() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-[90%] mx-auto  animate__animated animate__fadeIn">
        <div className="mt-4 text-2xl">
          <h1 className="flex items-center">
            오늘의{" "}
            <strong className="ml-2 text-3xl text-red-500">챌린지</strong>가
            기다리고 있어요{" "}
            <img src="/flame.png" width="30px" className="ml-1" alt="" />
          </h1>
          <div className="mt-5 text-center text-lg">
            <p>
              <strong>규은</strong>님의 소비 유형
            </p>
            <img src="/ayj2.png" width="25%" className="mt-4 mx-auto" alt="" />
            <p className="mt-2">
              <strong className="text-blue-500"> 간편 소비형</strong>
            </p>
            <div
              className="w-[50%] mt-4 mx-auto py-4 text-center text-2xl text-black cursor-pointer hover:opacity-50 transition-all duration-300 ease-in-out"
              onClick={() => navigate("/main/planner")}
            >
              <span className="border-b border-black">
                내 소비동향 확인하기
              </span>
            </div>
          </div>
        </div>
        <div className="mt-16 text-2xl">
          <h2 className="flex items-center">
            규은님이 필요할 것 같아 준비했어요
            <img src="/smile.png" width="25px" className="ml-1" alt="" />
          </h2>
          <div className="w-full mt-6 text-center flex flex-wrap justify-around">
            <MainCard name={"가계부"} id={1} target={"/planner"} />
            <MainCard name={"챌린지"} id={2} target={"/challenge"} />
            <MainCard name={"랭킹"} id={3} target={"/rank"} />
            <MainCard name={"채팅"} id={4} target={"/chat"} />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
