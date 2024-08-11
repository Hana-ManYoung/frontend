export default function Section3({ setAddress }) {
  return (
    <div className="w-full">
      <div className="mt-2">
        <div className="ml-2">주소를 입력해주세요</div>
        <input
          type="text"
          className="w-full h-16 mt-2 pl-5 text-xl border-2 rounded-2xl border-gray-400"
          placeholder="우편번호"
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="mt-4 flex justify-between">
        <input
          type="text"
          className="w-[50%] h-16 mr-1 mt-2 pl-5 text-xl border-2 rounded-2xl border-gray-400"
          placeholder="도로명주소"
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          className="w-[50%] h-16 ml-1 mt-2 pl-5 text-xl border-2 rounded-2xl border-gray-400"
          placeholder="지번주소"
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="mt-4 flex justify-between">
        <input
          type="text"
          className="w-[50%] h-16 mr-1 mt-2 pl-5 text-xl border-2 rounded-2xl border-gray-400"
          placeholder="상세주소"
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          className="w-[50%] h-16 ml-1 mt-2 pl-5 text-xl border-2 rounded-2xl border-gray-400"
          placeholder="참고항목"
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
    </div>
  );
}
