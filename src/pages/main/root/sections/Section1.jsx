import { useNavigate } from "react-router-dom";
import MainCard from "../components/MainCard";
import { useEffect, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { init } from "../../../../redux/user";
import { getCookie } from "../../../../js/getCookie";
import LoginModal from "../../../common/LoginModal";
import { getCategoryKor } from "../../../../js/getCategoryKor";
import { MAN_YOUNG_URL } from "../../../../etc/url";
import { getCategoryIndex } from "../../../../js/getCategoryIndex";
import LoadingSpinner from "../../../common/LoadingSpinner";

export default function Section1() {
  const [isLogin, setIsLogin] = useState(false);
  const [maxValue, setMaxValue] = useState(0);

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getCookie("JWT");
    const handleLogin = async () => {
      if (token) {
        try {
          const result = await axios.post(
            "http://localhost:8080/login/cookie",
            token
          );
          dispatch(init(result.data));
          setIsLogin(true);
        } catch (error) {
          console.error(error);
        } finally {
        }
      }
      if (user.user_login_id) {
        setIsLogin(true);
      }
    };
    handleLogin();
  }, []);

  useEffect(() => {
    const getConsumeChartData = async () => {
      try {
        const result = await axios.get(
          `${MAN_YOUNG_URL}/user/getConsumeData/${user.user_login_id}`
        );
        const transformedData = transformData(result.data);

        // Assuming the first set of data contains the values from which we need to get the max value
        setMaxValue(getMaxValue(transformedData[0]));
      } catch (error) {
        console.error("Error fetching consumption data:", error);
      }
    };

    if (isLogin && user.user_login_id) {
      getConsumeChartData();
    }
  }, [isLogin, user.user_login_id]);

  const transformData = (data) => {
    // 카테고리와 기본 값으로 초기화
    const transformed = {
      name: "내 소비 동향",
      "식비/간식": 0,
      "미용/패션": 0,
      교통비: 0,
      "문화/취미": 0,
      "교육/학습": 0,
      "디지털 콘텐츠/쇼핑": 0,
      "기타/예비/용돈": 0,
    };

    // 데이터 집계
    data.forEach((item) => {
      const categoryName = getCategoryKor(item.diary_item_category);
      if (categoryName) {
        // 금액이 0 이하일 경우 0으로 설정
        const amount = Math.max(0, -item.diary_item_amount);
        transformed[categoryName] += amount;
      }
    });

    // "기타/예비/용돈"과 "식비/간식"을 제외한 항목들의 총합 계산
    const total = Object.entries(transformed).reduce((acc, [key, value]) => {
      value = parseInt(value);
      if (key !== "기타/예비/용돈" && key !== "식비/간식" && key !== "name") {
        return acc + value;
      }
      return acc;
    }, 0);

    // "기타/예비/용돈"과 "식비/간식"을 제외한 항목들만 백분율로 변환
    Object.keys(transformed).forEach((key) => {
      if (key !== "name" && key !== "기타/예비/용돈" && key !== "식비/간식") {
        transformed[key] = parseFloat(
          ((transformed[key] / total) * 100).toFixed(2)
        ); // 소수점 2자리까지 표시
      }
    });

    return [transformed];
  };

  const getMaxValue = (transformed) => {
    // 제외할 항목들
    const excludedKeys = ["name", "교통비", "식비/간식", "기타/예비/용돈"];

    // 최댓값과 그에 대응하는 key를 저장하는 객체
    const maxEntry = Object.entries(transformed)
      .filter(([key, value]) => !excludedKeys.includes(key)) // 제외할 항목 걸러내기
      .reduce(
        (max, [key, value]) => {
          const numericValue = parseFloat(value);
          if (!isNaN(numericValue) && numericValue > max.value) {
            return { key, value: numericValue }; // 더 큰 값이 있을 경우 업데이트
          }
          return max; // 현재 max 유지
        },
        { key: null, value: -Infinity }
      ); // 초기값 설정
    return maxEntry.key; // 최댓값의 key를 반환
  };

  return (
    <div className="mt-4 text-2xl">
      {isLogin ? <MainTitle /> : <div>하나만영에 오신 것을 환영해요😃</div>}
      <div className="mt-6 flex justify-evenly items-center">
        {isLogin ? (
          <LoginInfo maxValue={maxValue} />
        ) : (
          <LoginBox setIsLogin={setIsLogin} />
        )}
        <MenuCard />
      </div>
    </div>
  );
}

function MenuCard() {
  return (
    <div className="w-[50%] h-[300px] text-center flex flex-wrap justify-center items-center gap-2">
      <MainCard name={"가계부"} id={1} target={"/planner"} />
      <MainCard name={"챌린지"} id={2} target={"/challenge"} />
      <MainCard name={"랭킹"} id={2} target={"/rank"} />
      <MainCard name={"채팅"} id={3} target={"/chat"} />
    </div>
  );
}

function MainTitle() {
  const user = useSelector((state) => state.user);

  return (
    <h2 className="font-bold flex items-center">
      {user.user_name.slice(1, 3)}님이 필요할 것 같아 준비했어요
      <img
        src={process.env.PUBLIC_URL + "/images/icons/smile.png"}
        width="25px"
        className={`ml-2`}
        alt=""
      />
    </h2>
  );
}

function LoginInfo({ maxValue }) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [isLoaded, setIsLoaded] = useState(false);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[50%] h-full py-3 text-center font-basic text-base text-gray-500 bg-gradient-to-t from-indigo-100 to-fuchsia-100 rounded-xl">
      <p>
        <strong>{user.user_name}</strong>님의 소비 유형
      </p>
      {!isLoaded && (
        <div className="h-44 flex items-center">
          <LoadingSpinner />
        </div>
      )}
      <img
        src={`${process.env.PUBLIC_URL}/images/ayj/${getCategoryIndex(
          maxValue
        )}.png`}
        width="40%"
        className={`mx-auto`}
        alt=""
        onLoad={() => setIsLoaded(true)}
      />
      <p className="">
        <span className="text-xs">내 소비 유형은?</span>
        <span className="mx-1 text-gray-700 text-xl font-bold">
          {getCategoryIndex(maxValue)}
        </span>
        <span className="text-xs">유형</span>
      </p>
      <div
        className={`w-[45%] mx-auto py-1 text-center text-lg text-black ${
          animate ? "animate__animated animate__pulse" : ""
        }`}
        onClick={() => navigate(process.env.PUBLIC_URL + "/planner")}
      >
        <span
          className={`border-b border-black text-gray-500 cursor-pointer hover:opacity-40 transition-all duration-300 ease-in-out `}
        >
          내 소비동향 확인하기
        </span>
      </div>
    </div>
  );
}

function LoginBox({ setIsLogin }) {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMessage = async (event) => {
      const { success, userId } = event.data;
      if (success) {
        try {
          const result = await axios.get(
            "http://localhost:8080/user/" + userId
          );
          dispatch(init(result.data));
          if (result.data.user_type === "UT_02") {
            navigate("/parent");
          } else if (result.data.user_type === "UT_03") {
            navigate("/admin");
          } else {
            setIsLogin(true);
          }
        } catch (error) {
          console.error(error);
        } finally {
          onClose(); // 모달 닫기
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [onClose, dispatch, navigate, setIsLogin]);

  return (
    <div className="w-[50%] h-[300px] text-center text-gray-500 bg-gradient-to-t from-indigo-100 to-fuchsia-100 rounded-xl flex flex-col justify-center items-center">
      <p className="text-base">간편하게 로그인하고</p>
      <p className="text-xl font-bold">디양한 서비스를 이용하세요</p>
      <p
        className={`mt-5 text-lg border-b border-gray-500 cursor-pointer hover:opacity-85 duration-300 ${
          animate ? "animate__animated animate__tada" : ""
        }`}
        onClick={onOpen}
      >
        로그인하러 가기
      </p>
      <LoginModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
}
