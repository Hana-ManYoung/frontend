import ChallengeAccount from "./components/ChallengeAccount";
import CheckCard from "./components/CheckCard";
import HanaAccount from "./components/HanaAccount";
import HanaPoint from "./components/HanaPoint";

export default function Profile() {
  return (
    <div className="w-[90%] mx-auto flex flex-col animate__animated animate__fadeIn">
      <div className="mt-4 py-4 bg-gradient-to-b from-emerald-100 to-lime-100 shadow-md rounded-xl">
        <div className="ml-4 flex items-center">
          <img
            src={process.env.PUBLIC_URL + "/images/hana/logo.png"}
            alt=""
            className="w-7 h-7"
          />
          <h1 className="ml-2 text-2xl font-bold">내 정보</h1>
        </div>
        <div className="w-[95%] mx-auto mt-3 px-6 py-4 bg-white font-basic rounded-xl">
          <p className="text-xl font-bold">
            장규은<span className="text-sm">님</span>{" "}
            <span className="ml-2 text-sm text-gray-500 font-normal">
              가입일 2024년 8월 14일
            </span>
          </p>
          <div className="mt-4 flex justify-between items-end">
            <h2 className="">회원정보</h2>
            <p className="text-xs text-blue-500 cursor-pointer">
              회원정보 수정
            </p>
          </div>
          <div className="mt-2 py-3 border-t">
            <div className="w-full flex items-center">
              <p className="w-[10%] text-sm text-gray-400">고객명</p>
              <p className="">장규은</p>
            </div>
            <div className="w-full flex items-center">
              <p className="w-[10%] text-sm text-gray-400">비밀번호</p>
              <p className="">********</p>
            </div>
            <div className="w-full flex items-center">
              <p className="w-[10%] text-sm text-gray-400">이메일</p>
              <p className="">denose0120@naver.com</p>
            </div>
            <div className="w-full flex items-center">
              <p className="w-[10%] text-sm text-gray-400">연락처</p>
              <p className="">010-5797-4993</p>
            </div>
          </div>
          <div className="py-3 border-y">
            <div className="w-full flex items-center">
              <p className="w-[10%] text-sm text-gray-400">주소</p>
              <p>서울시 영등포구 선유동 2로 56 205동 505호</p>
            </div>
            <div className="w-full flex items-center">
              <p className="w-[10%] text-sm text-gray-400">학교</p>
              <p>당산서중학교</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 py-6 bg-gradient-to-t from-slate-100 to-gray-200 rounded-xl shadow-md">
        <div className="ml-4 flex items-center">
          <img
            src={process.env.PUBLIC_URL + "/images/hana/asset.png"}
            alt=""
            className="w-7 h-7"
          />
          <h1 className="ml-2 text-2xl text-gray-600 font-bold">내 자산</h1>
        </div>
        <div className="w-[95%] mx-auto mt-3 px-4 pb-4 bg-white rounded-xl">
          <div className="w-full flex gap-5">
            <ChallengeAccount />
            <HanaPoint />
          </div>
          <div className="mt-2 w-full flex gap-5">
            <HanaAccount />
            <CheckCard />
          </div>
        </div>
      </div>
      <div className="mt-8 px-4 py-4 bg-gradient-to-b from-red-100 to-purple-100 rounded-xl shadow-md">
        <div className="ml-2 flex items-center">
          <img
            src={process.env.PUBLIC_URL + "/images/hana/relation.png"}
            alt=""
            className="w-7 h-7"
          />
          <h1 className="ml-2 text-2xl text-gray-500 font-bold">관계</h1>
        </div>
        <div className="w-[98%] mt-3 mx-auto font-basic flex gap-10">
          <div className="w-[50%] bg-white border px-7 py-5 rounded-xl">
            <div className="flex justify-between items-end">
              <p>관계 목록</p>
              <p className="text-blue-500 text-xs cursor-pointer">관계 추가</p>
            </div>
            <div className="h-36 flex justify-center items-center">
              관계를 추가해주세요!
            </div>
          </div>
          <div className="w-[50%] bg-white border px-5 py-5 rounded-xl">
            <div>요청</div>
            <div className="h-36 flex justify-center items-center">
              요청이 없어요
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
