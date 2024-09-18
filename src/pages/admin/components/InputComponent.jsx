import ChallengeComponent from "./ChallengeComponent";
import NewsComponent from "./NewsComponent";
import QuizComponent from "./QuizComponent";
import UserComponent from "./UserComponent";

export default function InputComponent({ selectedMenu }) {
  const title = [
    "회원 조회",
    "랭킹 조회",
    "챌린지 조회",
    "퀴즈 관리",
    "뉴스 관리",
  ];

  return [
    <UserComponent />,
    <div className="p-10">
      <h1 className="text-3xl font-bold">{title[selectedMenu]}</h1>
      <div className="mt-10 flex items-center text-xl gap-2">
        <select className="w-[20%] h-14 text-center border border-gray-400 rounded-xl">
          <option>학교</option>
          <option>지역</option>
          <option>나이</option>
        </select>
        <input
          className="w-[60%] px-10 h-14 border border-gray-400 rounded-xl"
          placeholder="검색할 항목을 입력해주세요"
        />
        <div className="w-[10%] btn-hana-blue text-white text-center py-3 cursor-pointer hover:opacity-80 duration-300 rounded-xl">
          검색
        </div>
        <div className="w-[10%] btn-hana-green text-white text-center py-3 cursor-pointer hover:opacity-80 duration-300 rounded-xl">
          전체 조회
        </div>
      </div>
    </div>,
    <ChallengeComponent />,
    <QuizComponent />,
    <NewsComponent />,
  ][selectedMenu];
}
