export default function Section1() {
  return (
    <div className="mt-4 py-4 bg-gradient-to-t from-emerald-200 to-green-200 shadow-md rounded-xl">
      <div className="ml-4 flex items-center">
        <img
          src={process.env.PUBLIC_URL + "/images/hana/logo.png"}
          alt=""
          className="w-7 h-7"
        />
        <h1 className="ml-2 text-2xl text-gray-600 font-bold">내 정보</h1>
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
          <p className="text-xs text-blue-500 cursor-pointer">회원정보 수정</p>
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
  );
}
