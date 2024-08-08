import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/swiper-custom.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useNavigate } from "react-router-dom";
import MainCard from "../components/MainCard";

import Footer from "../components/Footer";

export default function Main() {
  const navigate = useNavigate();
  const swiperStyle = {
    width: "100%",
    height: "350px",
  };
  return (
    <>
      <div className="w-[90%] mx-auto  animate__animated animate__fadeIn">
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
                onClick={() =>
                  navigate(process.env.PUBLIC_URL + "/main/planner")
                }
              >
                <span className="border-b border-black cursor-pointer hover:opacity-40 transition-all duration-300 ease-in-out">
                  내 소비동향 확인하기
                </span>
              </div>
            </div>
            <MenuCard />
          </div>
        </div>
        <div className="mt-10 text-2xl">
          <h1 className="flex items-center">
            오늘의 <strong className="ml-2 text-3xl">챌린지</strong>가 기다리고
            있어요{" "}
            <img
              src={process.env.PUBLIC_URL + "/images/icons/flame.png"}
              width="30px"
              className="ml-1"
              alt=""
            />
          </h1>
        </div>
        <div className="w-[95%] mt-6 mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            allowTouchMove={false}
            spaceBetween={25}
            speed={1000}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            onClick={() => navigate(process.env.PUBLIC_URL + "/main/challenge")}
            className="cursor-pointer"
          >
            <SwiperSlide style={swiperStyle}>
              <div className="w-full h-full mx-auto rounded-xl bg-blue-50 flex justify-center items-center">
                <div className="w-[50%] px-16 font-basic">
                  <p className="text-base text-gray-500">
                    경제 상식을 키워보세요
                  </p>
                  <h1 className="mt-2 text-4xl text-blue-900 font-bold">
                    오늘의 퀴즈
                  </h1>
                </div>
                <div className="w-[50%]">
                  <img
                    src={process.env.PUBLIC_URL + "/images/main/quiz.png"}
                    alt=""
                    className="drop-shadow-xl"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={swiperStyle}>
              <div className="w-full h-full mx-auto rounded-xl bg-yellow-50 flex justify-center items-center">
                <div className="w-[50%] px-16 font-basic">
                  <p className="text-base text-gray-500">
                    사고 싶은 물건이 있다면?
                  </p>
                  <h1 className="mt-2 text-4xl text-blue-900 font-bold">
                    챌린지 적금
                  </h1>
                </div>
                <div className="w-[50%]">
                  <img
                    src={process.env.PUBLIC_URL + "/images/main/account.png"}
                    alt=""
                    className="drop-shadow-xl"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={swiperStyle}>
              <div className="w-full h-full mx-auto rounded-xl bg-red-50 flex justify-center items-center">
                <div className="w-[50%] px-16 font-basic">
                  <p className="text-base text-gray-500">
                    계획적인 소비습관을 길러요
                  </p>
                  <h1 className="mt-2 text-4xl text-blue-900 font-bold">
                    소비계획 / 가계부
                  </h1>
                </div>
                <div className="w-[50%]">
                  <img
                    src={process.env.PUBLIC_URL + "/images/main/planner.png"}
                    alt=""
                    className="drop-shadow-xl"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={swiperStyle}>
              <div className="w-full h-full mx-auto rounded-xl bg-purple-50 flex justify-center items-center">
                <div className="w-full px-16 font-basic">
                  <p className="text-base text-gray-500">
                    당신의 금전운을 책임져드려요✨
                  </p>
                  <h1 className="mt-2 text-4xl text-blue-900 font-bold">
                    하나타로
                  </h1>
                </div>
                <div className="relative w-full h-full">
                  <img
                    src={process.env.PUBLIC_URL + "/images/main/cardBack.jpg"}
                    className="absolute w-48 right-12 -bottom-12 rounded-xl z-10 shadow-2xl drop-shadow-lg"
                    alt=""
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/images/main/cardBack.jpg"}
                    className="absolute w-32 -right-3 -bottom-12 rounded-xl rotate-45 shadow-lg opacity-85"
                    alt=""
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/images/main/cardBack.jpg"}
                    className="absolute w-32 rounded-xl right-52 -bottom-10 -rotate-12 shadow-lg opacity-85"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={swiperStyle}>
              <div className="w-full h-full mx-auto rounded-xl bg-stone-100 flex justify-center items-center">
                <div className="w-[50%] px-16 font-basic">
                  <p className="text-base text-gray-500">
                    부모님께 챌린지를 받아보는건 어떨까요?
                  </p>
                  <h1 className="mt-2 text-4xl text-blue-900 font-bold">
                    용돈 조르기
                  </h1>
                </div>
                <div className="w-[50%]">
                  <img
                    src={process.env.PUBLIC_URL + "/images/main/pocket.png"}
                    alt=""
                    className="drop-shadow-xl"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Footer />
    </>
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
