export default function Section3() {
  return (
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
  );
}
