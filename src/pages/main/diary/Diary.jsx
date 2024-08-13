import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { IoIosArrowForward } from "react-icons/io";
import { getCategoryBgColor, getCategoryKor } from "../../../js/getCategoryKor";
import { SERVER_URL } from "../../../etc/url";
import Loading from "../../common/Loading";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";

const INITIAL_CATEGORY_SUMS = {
  sho: 0,
  tra: 0,
  foo: 0,
  hom: 0,
  mar: 0,
  car: 0,
  caf: 0,
  ent: 0,
  etc: 0,
};

export default function Diary() {
  const swiperRef = useRef(null);
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
  const [consumeChartData, setConsumeChartData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("none");
  const [categorySums, setCategorySums] = useState(INITIAL_CATEGORY_SUMS);

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
      const sums = consumeData.reduce(
        (acc, item) => {
          if (item.category && item.category !== "none") {
            acc[item.category] = (acc[item.category] || 0) + item.amount;
          }
          return acc;
        },
        { ...INITIAL_CATEGORY_SUMS }
      );

      setCategorySums(sums);

      const chartData = Object.keys(sums).map((key) => ({
        name: getCategoryKor(key),
        value: sums[key],
      }));
      setConsumeChartData(chartData);
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
          <Section1
            consumeData={consumeData}
            remainAmount={remainAmount}
            consumeDayAmount={consumeDayAmount}
            consumeChartData={consumeChartData}
            categorySums={categorySums}
            handleSelectChange={handleSelectChange}
          />
        </SwiperSlide>
        <SwiperSlide style={swiperStyle}>
          <Section2 />
        </SwiperSlide>
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
