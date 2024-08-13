import {
  getCategoryBgColor,
  getCategoryKor,
} from "../../../../js/getCategoryKor";
import ConsumePieChart from "../components/ConsumePieChart";
import { IoMdSquare } from "react-icons/io";

export default function Section1({
  consumeData,
  remainAmount,
  consumeDayAmount,
  consumeChartData,
  categorySums,
  handleSelectChange,
}) {
  return (
    <>
      {consumeData.length === 0 ? (
        <div className="w-full h-[600px] text-3xl flex flex-col items-center justify-center">
          <img
            src={process.env.PUBLIC_URL + "/images/hana/category.gif"}
            alt="카테고리 추가"
            className="w-40 my-2"
          />
          <p className="my-4">금일 소비 내역이 없습니다</p>
        </div>
      ) : (
        <>
          <div className="w-full h-[300px] mt-5 font-basic overflow-y-auto">
            <div className="py-2 text-center font-bold flex border-b">
              <p className="w-[10%]">시간</p>
              <p className="w-[20%]">거래유형</p>
              <p className="w-[40%]">항목명</p>
              <p className="w-[15%]">금액</p>
              <p className="w-[15%]">카테고리</p>
            </div>
            {consumeData.map((data, index) => (
              <div className="py-2 text-center border-t flex" key={index}>
                <p className="w-[10%] px-3 border-r">{data.time}</p>
                <p className="w-[20%] px-3 border-r">{data.type}</p>
                <p className="w-[40%] px-10 border-r text-left">
                  {data.target}
                </p>
                <p
                  className={
                    "w-[15%] px-5 border-r text-right " +
                    (data.amount > 0 ? "text-hana" : "text-orange-500")
                  }
                >
                  {data.amount > 0 ? "+" : ""}
                  {data.amount.toLocaleString("ko-KR")} 원
                </p>
                <select
                  name=""
                  id=""
                  value={data.category || "none"}
                  onChange={(e) => handleSelectChange(e, index)}
                  className="w-[15%] text-center"
                >
                  <option value="none">카테고리</option>
                  <option value="sho">쇼핑/뷰티</option>
                  <option value="tra">여행/숙박</option>
                  <option value="foo">식비</option>
                  <option value="hom">주거/통신</option>
                  <option value="mar">편의점/마트</option>
                  <option value="car">교통/자동차</option>
                  <option value="caf">카페/디저트</option>
                  <option value="ent">문화/여가</option>
                  <option value="etc">기타</option>
                </select>
              </div>
            ))}
          </div>
          <div className="mt-2 text-2xl flex justify-end">
            <div className="flex mx-2">
              <h2 className="mr-2">소비(?) 금액</h2>
              <p className="text-orange-500">
                {(-consumeDayAmount).toLocaleString("ko-KR")} 원
              </p>
            </div>
            <div className="flex mx-2">
              <h2 className="mr-2">잔고</h2>
              <p className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-transparent bg-clip-text">
                {remainAmount.toLocaleString("ko-KR")} 원
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-2xl font-bold">
              오늘의 지출
              <span className="ml-3 text-sm text-gray-400">소비항목별</span>
            </h2>
            <div className="flex justify-center">
              {Object.values(categorySums).every((value) => value === 0) ? (
                <div className="h-[250px] flex-1 flex flex-col justify-center items-center animate__animated animate__fadeIn">
                  <p className="text-2xl">카테고리를 추가해주세요!</p>
                  <img
                    src={process.env.PUBLIC_URL + "/images/hana/category.gif"}
                    alt="카테고리 추가"
                    className="w-32 my-2"
                  />
                </div>
              ) : (
                <>
                  <div className="w-[40%]">
                    <ConsumePieChart data={consumeChartData} />
                  </div>
                  <div className="h-[250px] text-xl font-basic flex flex-wrap flex-col gap-5">
                    {Object.keys(categorySums).map(
                      (key, index) =>
                        categorySums[key] !== 0 && (
                          <div
                            key={index}
                            className="w-[235px] flex items-center animate__animated animate__fadeInDown"
                          >
                            <IoMdSquare
                              size="25"
                              color={getCategoryBgColor(key)}
                              className="mr-1 w-[10%]"
                            />
                            <p className="mr-2 w-[45%]">
                              {getCategoryKor(key)}
                            </p>
                            <p className="w-[45%] text-right">
                              {categorySums[key] > 0
                                ? "+" +
                                  categorySums[key].toLocaleString("ko-KR")
                                : (-categorySums[key]).toLocaleString("ko-KR")}
                              원
                            </p>
                          </div>
                        )
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
