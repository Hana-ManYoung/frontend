import axios from "axios";
import { SERVER_URL } from "../etc/url";
import { useEffect, useRef, useState } from "react";
import Loading from "../components/Loading";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { IoIosArrowForward } from "react-icons/io";
import { getCategoryBgColor, getCategoryKor } from "../js/getCategoryKor";
import { IoMdSquare } from "react-icons/io";

export default function Diary() {
  const swiperRef = useRef(0);
  const currentDate = new Date();
  const today =
    currentDate.getFullYear() +
    "년 " +
    (currentDate.getMonth() + 1) +
    "월 " +
    currentDate.getDate() +
    "일";

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [consumeData, setConsumeData] = useState([]);
  const [remainAmount, setRemainAmount] = useState(0);
  const [consumeDayAmount, setConsumeDayAmount] = useState(0);
  const [consumeChartData, setConsumeChartData] = useState([
    {
      name: "Group A",
      value: 400,
    },
    {
      name: "Group B",
      value: 300,
    },
    {
      name: "Group C",
      value: 300,
    },
    {
      name: "Group D",
      value: 200,
    },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("none");
  const [categorySums, setCategorySums] = useState({});

  const swiperStyle = {
    width: "100%",
    height: "auto",
  };

  useEffect(() => {
    const getUseHistory = async () => {
      try {
        const result = await axios.get(SERVER_URL + "consume.json");
        setConsumeData(result.data.data.consumeData);
        setRemainAmount(result.data.data.remain);
        setConsumeDayAmount(result.data.data.consumeDay);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getUseHistory();
  }, []);

  useEffect(() => {
    const getCategorySums = () => {
      const sums = consumeData.reduce((acc, item) => {
        if (item.category && item.category !== "none") {
          acc[item.category] = (acc[item.category] || 0) + item.amount;
        }
        return acc;
      }, {});

      setCategorySums(sums);
    };

    getCategorySums();
  }, [consumeData]);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      const currentIndex = swiperRef.current.activeIndex;
      setCurrentSlide(currentIndex);
    }
  };

  const handleCategoryChange = (index, category) => {
    const updatedData = [...consumeData];
    updatedData[index].category = category;
    setConsumeData(updatedData);
  };

  const handleSelectChange = (e, index) => {
    const category = e.target.value;
    setSelectedCategory(category);
    handleCategoryChange(index, category);
  };

  if (isLoading) return <Loading />;

  return (
    <div className="w-[90%] mx-auto flex flex-col animate__animated animate__fadeIn">
      <h1 className="mt-4 text-2xl font-bold">
        소비계획 / 가계부
        <span className="ml-3 text-sm text-gray-400">{today}</span>
      </h1>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          handleSlideChange();
        }}
        onSlideChange={handleSlideChange}
        modules={[Pagination, Navigation]}
        className="w-full"
        allowTouchMove={false}
        spaceBetween={150}
        speed={1000}
      >
        <SwiperSlide style={swiperStyle}>
          <div className="w-full h-[300px] mt-5 font-basic overflow-y-auto">
            <div className="py-2 text-center font-bold flex  border-b">
              <p className="w-[10%]">시간</p>
              <p className="w-[20%]">거래유형</p>
              <p className="w-[40%]">항목명</p>
              <p className="w-[15%]">금액</p>
              <p className="w-[15%]">카테고리</p>
            </div>
            {consumeData.map((data, index) => {
              return (
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
              );
            })}
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
              {Object.keys(categorySums).length === 0 ? (
                <div className="h-[250px] flex-1 flex flex-col justify-center items-center animate__animated animate__fadeIn">
                  <p className="text-2xl">카테고리를 추가해주세요!</p>
                  <img
                    src={process.env.PUBLIC_URL + "/images/hana/category.gif"}
                    alt=""
                    className="w-32 my-2"
                  />
                </div>
              ) : (
                <>
                  <div className="w-[40%]">
                    <ConsumePieChart data={consumeChartData} />
                  </div>
                  {
                    <div className="h-[250px] text-xl font-basic flex flex-wrap flex-col gap-5">
                      {Object.keys(categorySums).map((key, index) => (
                        <div
                          key={index}
                          className="w-[235px] flex items-center animate__animated animate__fadeInDown"
                        >
                          <IoMdSquare
                            size="25"
                            color={getCategoryBgColor(key)}
                            className="mr-1 w-[10%]"
                          />
                          <p className="mr-2 w-[45%]">{getCategoryKor(key)}</p>
                          <p className="w-[45%] text-right">
                            {categorySums[key] > 0
                              ? "+ " + categorySums[key].toLocaleString("ko-KR")
                              : (-categorySums[key]).toLocaleString("ko-KR")}
                            원
                          </p>
                        </div>
                      ))}
                    </div>
                  }
                </>
              )}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={swiperStyle}>하이</SwiperSlide>
      </Swiper>
      <button
        onClick={() => swiperRef.current && swiperRef.current.slideNext()}
        className="w-full my-5 py-4 text-center text-2xl text-white btn-hana-blue rounded-2xl cursor-pointer hover:opacity-85 transition-all duration-300 ease-in-out"
      >
        <div className="relative flex justify-center items-center group">
          <p>
            {currentSlide === 0 ? "소비계획 비교하기" : "소비계획 작성하기"}
          </p>
          <IoIosArrowForward
            size="30"
            className="absolute right-16 text-white duration-300 group-hover:translate-x-4"
          />
        </div>
      </button>
    </div>
  );
}

function ConsumePieChart({ data }) {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <PieChart width={300} height={250}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        fill="#8884d8"
      />
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
      <Tooltip />
    </PieChart>
  );
}
