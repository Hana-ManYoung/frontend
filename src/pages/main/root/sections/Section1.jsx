import { useNavigate } from "react-router-dom";
import MainCard from "../components/MainCard";

export default function Section1() {
  const navigate = useNavigate();
  return (
    <div className="mt-4 text-2xl">
      <h2 className="font-bold flex items-center">
        규은님이 필요할 것 같아 준비했어요
        <img
          src={process.env.PUBLIC_URL + "/images/icons/smile.png"}
          width="25px"
          className="ml-2"
          alt=""
        />
      </h2>
      <div className="mt-6 flex justify-evenly">
        <div className="w-[50%] text-center text-lg">
          <p>
            <strong>규은</strong>님의 소비 유형
          </p>
          <img
            src={process.env.PUBLIC_URL + "/images/ayj/2.png"}
            width="35%"
            className="mt-4 mx-auto"
            alt=""
          />
          <p className="mt-2">
            <strong className="">간편 소비형</strong>
          </p>
          <div
            className="w-[45%] mt-2 mx-auto py-4 text-center text-xl text-black "
            onClick={() => navigate(process.env.PUBLIC_URL + "/main/planner")}
          >
            <span className="border-b border-black cursor-pointer hover:opacity-40 transition-all duration-300 ease-in-out">
              내 소비동향 확인하기
            </span>
          </div>
        </div>
        <MenuCard />
      </div>
    </div>
  );
}

function MenuCard() {
  return (
    <div className="w-[50%] text-center flex flex-wrap justify-around">
      <MainCard name={"가계부"} id={1} target={"/planner"} />
      <MainCard name={"챌린지"} id={2} target={"/challenge"} />
      <MainCard name={"랭킹"} id={2} target={"/rank"} />
      <MainCard name={"채팅"} id={3} target={"/chat"} />
    </div>
  );
}
