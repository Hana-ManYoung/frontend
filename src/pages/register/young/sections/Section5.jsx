export default function Section5({ setSchool }) {
  return (
    <div className="w-full">
      <div className="text-center text-xl">
        <span className="border-b border-black">이미지 업로드</span>
      </div>
      <div className="ml-2">학교 이름을 입력해주세요</div>
      <input
        type="text"
        className="w-full mt-2 pl-5 h-16 text-xl border-2 rounded-2xl border-gray-400"
        placeholder="학교 입력"
        onChange={(e) => setSchool(e.target.value)}
      />
    </div>
  );
}
