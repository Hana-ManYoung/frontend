import { Swiper, SwiperSlide } from "swiper/react";
import Logo from "../components/Logo";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
import JSConfetti from "js-confetti";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import AccountInfo from "../components/AccountInfo";
import CheckCardInfo from "../components/CheckCardInfo";

export default function Register() {
  const swiperRef = useRef(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [title, setTitle] = useState("회원가입");
  const [selectCard, setSelectCard] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [jsConfetti, setJsConfetti] = useState(false);

  const [userType, setUserType] = useState("m_stu");
  const [userName, setUserName] = useState("");
  const [ssnFront, setFrontSsn] = useState("");
  const [ssnBack, setBackSsn] = useState("");
  const [phoneNumber1, setPhoneNumber1] = useState("");
  const [phoneNumber2, setPhoneNumber2] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [emailDomain, setEmailDomain] = useState("naver.com");
  const [school, setSchool] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(0);
  const [accountCheck, setAccountCheck] = useState(false);
  const [cardCheck, setCardCheck] = useState(false);
  const [userInfo, setUserInfo] = useState({
    userType: "",
    userName: "",
    ssn: "",
    phoneNumber: "",
    address: "",
    email: "",
    school: "",
    id: "",
    password: "",
  });

  const [btnActive, setBtnActive] = useState(false);

  const navigate = useNavigate();

  const checkCards = [
    { name: "T1 체크카드", image: "/cards/card_t1.png" },
    { name: "MULTI 체크카드", image: "/cards/card_plus.png" },
    { name: "축덕 체크카드", image: "/cards/card_fb.png" },
  ];

  const swiperStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "auto",
  };

  const handleSlideChange = () => {
    if (swiperRef.current) {
      const currentIndex = swiperRef.current.activeIndex;
      setCurrentSlide(currentIndex);
      if (currentIndex === 3) {
        setTitle("회원가입-계좌개설");
      } else if (currentIndex === 4) {
        setTitle("회원가입-체크카드발급");
      } else if (currentIndex === 5 && jsConfetti) {
        setTitle("회원가입-완료");
        jsConfetti.addConfetti({
          confettiColors: ["#FDBB37"],
          confettiNumber: 500,
        });
      } else {
        setTitle("회원가입");
      }
    }
  };

  const handleSelect = (e) => {
    setUserType(e.target.value);
  };

  const handleChange = (e, setter, maxLength) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      setter(value);
    }
  };

  const handleRegist = () => {
    console.log(userInfo);
    console.log("axios 요청 및 로딩");
    swiperRef.current.slideNext();
  };

  useEffect(() => {
    const isSlideValid = () => {
      switch (currentSlide) {
        case 0:
          return (
            userName.length > 0 && ssnFront.length === 6 && ssnBack.length === 7
          );
        // return true;
        case 1:
          return (
            id.length > 0 && isValidPassword === 1 && password === passwordCheck
          );
        // return true;
        case 2:
          return (
            address.length > 0 &&
            school.length > 0 &&
            email.length > 0 &&
            phoneNumber1.length > 0 &&
            phoneNumber2.length > 0
          );
        // return true;
        case 3:
          return accountCheck;
        // return true;
        case 4:
          return cardCheck && selectCard !== null;
        // return true;
        case 5:
          return true;
        default:
          return false;
      }
    };

    setBtnActive(isSlideValid());
    setUserInfo({
      userType: userType,
      userName: userName,
      ssn: ssnFront + "-" + ssnBack,
      phoneNumber: "010" + phoneNumber1 + phoneNumber2,
      address: address,
      email: email + "@" + emailDomain,
      school: school,
      id: id,
      password: password,
    });
  }, [
    userType,
    currentSlide,
    userName,
    ssnFront,
    ssnBack,
    phoneNumber1,
    phoneNumber2,
    address,
    email,
    school,
    id,
    password,
    passwordCheck,
    accountCheck,
    selectCard,
    isValidPassword,
    cardCheck,
    emailDomain,
  ]);

  useEffect(() => {
    setJsConfetti(new JSConfetti());
  }, []);

  useEffect(() => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (password) {
      passwordRegex.test(password)
        ? setIsValidPassword(1)
        : setIsValidPassword(2);
    } else {
      setIsValidPassword(0);
    }
  }, [password]);

  return (
    <>
      <div className="relative w-screen h-full min-h-screen bg-hana animate__animated animate__fadeIn">
        <div className="w-full max-w-[1024px] min-h-screen mx-auto bg-white shadow-xl flex flex-col justify-center items-center">
          <Logo />
          <div className="w-[80%] mt-8">
            <img
              src="/ayj1.png"
              className="absolute right-0 bottom-0 w-0 md:w-32 lg:w-48"
              alt=""
            />
            <h1 className="text-2xl">{title}</h1>
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
                <div className="w-full">
                  <div className="mt-2">
                    <div className="ml-2">회원 유형을 선택해주세요</div>
                    <select
                      className="w-full h-16 mt-2 pl-5 text-xl border-2 rounded-2xl border-gray-400"
                      value={userType}
                      onChange={handleSelect}
                    >
                      <option value="m_stu">청소년</option>
                      <option value="m_par">학부모</option>
                    </select>
                  </div>
                  <div className="mt-8">
                    <div className="ml-2">이름을 입력해주세요</div>
                    <input
                      type="text"
                      className="w-full h-16 mt-2 pl-5 text-xl border-2 rounded-2xl border-gray-400"
                      placeholder="이름 입력"
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div className="mt-8">
                    <div className="ml-2">주민번호를 입력해주세요</div>
                    <div className="flex items-center">
                      <input
                        type="number"
                        className="w-[48%] h-16 mt-2 pl-5 text-xl border-2 rounded-2 rounded-2xl border-gray-400"
                        placeholder="주민번호 앞자리 입력"
                        onChange={(e) => handleChange(e, setFrontSsn, 6)}
                        onInput={(e) => {
                          if (e.target.value.length > 6) {
                            e.target.value = e.target.value.slice(0, 6);
                          }
                        }}
                      />
                      <div className="w-[4%] text-xl text-center font-bold">
                        -
                      </div>
                      <input
                        type="password"
                        className="w-[48%] h-16 mt-2 pl-5 text-xl border-2 rounded-2xl border-gray-400"
                        placeholder="주민번호 뒷자리 입력"
                        maxLength={7}
                        onChange={(e) => handleChange(e, setBackSsn, 7)}
                        onInput={(e) => {
                          if (e.target.value.length > 7) {
                            e.target.value = e.target.value.slice(0, 7);
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={swiperStyle}>
                <div className="w-full">
                  <div className="mt-2">
                    <div className="ml-2">아이디를 입력해주세요</div>
                    <input
                      type="text"
                      className="w-full mt-2 pl-5 h-16 text-xl border-2 rounded-2xl border-gray-400"
                      placeholder="아이디 입력"
                      onChange={(e) => setId(e.target.value)}
                    />
                  </div>
                  <div className="mt-8">
                    <div className="ml-2">
                      비밀번호를 입력해주세요
                      {isValidPassword === 0 ? null : isValidPassword === 1 ? (
                        <span className="ml-3 text-xs text-blue-500">
                          비밀번호 형식과 일치해요
                        </span>
                      ) : (
                        <span className="ml-3 text-xs text-red-500">
                          비밀번호 형식과 일치하지 않아요
                        </span>
                      )}
                    </div>
                    <input
                      type="password"
                      className="w-full mt-2 pl-5 h-16 text-xl border-2 rounded-2xl border-gray-400"
                      placeholder="비밀번호 입력 (영문, 숫자 포함 8자 이상)"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mt-8">
                    <div className="ml-2">
                      비밀번호를 다시 입력해주세요
                      {!passwordCheck ? null : passwordCheck === password ? (
                        <span className="ml-3 text-xs text-hana">일치해요</span>
                      ) : (
                        <span className="ml-3 text-xs text-gray-500">
                          일치하지 않아요
                        </span>
                      )}
                    </div>
                    <input
                      type="password"
                      className="w-full mt-2 pl-5 h-16 text-xl border-2 rounded-2xl border-gray-400"
                      placeholder="비밀번호 확인"
                      onChange={(e) => setPasswordCheck(e.target.value)}
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={swiperStyle}>
                <div className="w-full">
                  <div className="mt-2">
                    <div className="ml-2">주소를 입력해주세요</div>
                    <input
                      type="text"
                      className="w-full h-16 mt-2 pl-5 text-xl border-2 rounded-2xl border-gray-400"
                      placeholder="주소 입력"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="mt-8">
                    <div className="ml-2">학교 이름을 입력해주세요</div>
                    <input
                      type="text"
                      className="w-full mt-2 pl-5 h-16 text-xl border-2 rounded-2xl border-gray-400"
                      placeholder="학교 입력"
                      onChange={(e) => setSchool(e.target.value)}
                    />
                  </div>
                  <div className="mt-8">
                    <div className="ml-2">이메일을 입력해주세요</div>
                    <div className="flex items-center">
                      <input
                        type="text"
                        className="w-[55%] h-16 mt-2 pl-5 text-xl border-2 rounded-2xl border-gray-400"
                        placeholder="이메일 입력"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <div className="w-[5%] text-2xl text-center font-bold">
                        @
                      </div>
                      <select
                        className="w-[40%] h-16 mt-2 pl-5 text-xl font-bold border-2 rounded-2xl border-gray-400"
                        onChange={(e) => setEmailDomain(e.target.value)}
                      >
                        <option name="">naver.com</option>
                        <option name="">daum.net</option>
                        <option name="">kakao.com</option>
                        <option name="">gmail.com</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="ml-2">전화번호를 입력해주세요</div>
                    <div className="flex items-center">
                      <div className="w-[31%] h-16 mt-2 pl-5 text-xl font-bold border-2 rounded-2xl border-gray-400 flex items-center">
                        010
                      </div>
                      <div className="w-[3.5%] text-center text-2xl font-bold">
                        {" "}
                        -
                      </div>
                      <input
                        type="text"
                        className="w-[31%] h-16 mt-2 pl-5 text-xl border-2 rounded-2xl border-gray-400"
                        placeholder="1234"
                        onChange={(e) => setPhoneNumber1(e.target.value)}
                      />
                      <div className="w-[3.5%] text-center text-2xl font-bold">
                        -
                      </div>
                      <input
                        type="text"
                        className="w-[31%] h-16 mt-2 pl-5 text-xl border-2 rounded-2xl border-gray-400"
                        placeholder="5678"
                        onChange={(e) => setPhoneNumber2(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={swiperStyle}>
                <div className="w-full">
                  <h2 className="text-xl mt-6">영하나플러스 통장</h2>
                  <div className="relative pt-2">
                    <div className="w-[80%] h-full absolute mx-auto left-0 right-0 text-sm text-center text-gray-600 flex justify-center items-center">
                      <p className="flex-1 pr-2">
                        YOUTH고객
                        <br />
                        전용통장
                      </p>
                      <p className="flex-1">
                        용돈 받으면
                        <br />
                        수수료 우대
                        <br />
                        혜택까지~
                      </p>
                      <p className="flex-1">
                        체크카드 사용하고
                        <br />
                        수수료 우대
                        <br />
                        혜택까지~
                      </p>
                      <p className="flex-1 pl-2">
                        나의 첫거래
                        <br />
                        은행~
                      </p>
                    </div>
                    <img
                      src="/young_account.png"
                      className="w-[85%] mx-auto mt-4"
                      alt=""
                    />
                  </div>
                  <div className="text-center mt-6">
                    젊은 그대, 당신을 위한 Must Have 통장
                  </div>
                  <div className="mt-4 text-center" onClick={onOpen}>
                    <span className="px-3 text-xl border-b border-black cursor-pointer">
                      상품 정보 확인하기
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={swiperStyle}>
                <div className="w-full">
                  <p className="text-xl">디자인을 선택해주세요</p>
                  <div className="mt-14 flex justify-evenly">
                    {checkCards.map((card, i) => (
                      <div
                        key={i}
                        className={
                          "w-[22.5%] flex flex-col items-center hover:scale-125 hover:opacity-100 transition-transform duration-500 ease-in-out cursor-pointer" +
                          (selectCard === i
                            ? " opacity-100 scale-125"
                            : " opacity-50")
                        }
                        onClick={() => {
                          setSelectCard(i);
                        }}
                      >
                        <img
                          src={card.image}
                          className="shadow-md shadow-gray-700 rounded-md"
                          alt=""
                        />
                        <div className="mt-6">{card.name}</div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-12" onClick={onOpen}>
                    <span className="text-xl border-b-black border-b px-3 cursor-pointer">
                      상품 정보 확인하기
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={swiperStyle}>
                <div className="w-full flex flex-col justify-center items-center">
                  <div className="py-4 text-3xl">회원가입이 완료되었어요!</div>
                  <img src="/byeoldol1.png" alt="" className="w-44" />
                  <div className="py-4 text-lg">
                    다양한 챌린지와 컨텐츠가 기다리고 있어요
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="flex gap-4 mt-8">
              {currentSlide === 0 ? null : currentSlide === 5 ? null : (
                <button
                  onClick={() =>
                    swiperRef.current && swiperRef.current.slidePrev()
                  }
                  className="w-full my-5 py-4 text-center text-2xl text-white btn-hana-blue rounded-2xl cursor-pointer hover:opacity-85 transition-all duration-300 ease-in-out"
                >
                  이전
                </button>
              )}
              <button
                className={
                  "w-full my-5 py-4 text-center text-2xl text-white btn-hana-green rounded-2xl cursor-pointer " +
                  (btnActive
                    ? "opacity-100 hover:opacity-85 transition-all duration-300 ease-in-out"
                    : "opacity-50 cursor-not-allowed")
                }
                onClick={
                  currentSlide === 5
                    ? () => {
                        navigate("/");
                      }
                    : currentSlide === 4
                    ? () => handleRegist()
                    : () =>
                        btnActive &&
                        swiperRef.current &&
                        swiperRef.current.slideNext()
                }
                disabled={!btnActive}
              >
                {currentSlide === 5
                  ? "로그인 하러가기"
                  : currentSlide === 3
                  ? "계좌개설"
                  : currentSlide === 4
                  ? "카드발급 및 회원가입"
                  : "다음"}
              </button>
            </div>
          </div>
          <InfoModal
            currentSlide={currentSlide}
            isOpen={isOpen}
            onClose={onClose}
            accountCheck={accountCheck}
            setAccountCheck={setAccountCheck}
            cardCheck={cardCheck}
            setCardCheck={setCardCheck}
          />
        </div>
      </div>
    </>
  );
}

function InfoModal({
  isOpen,
  onClose,
  currentSlide,
  accountCheck,
  setAccountCheck,
  cardCheck,
  setCardCheck,
}) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
        <ModalOverlay />
        <ModalContent
          maxH="80vh"
          overflowY="auto"
          sx={{
            overflow: "auto",
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {currentSlide === 3 ? (
            <>
              <AccountInfo
                accountCheck={accountCheck}
                setAccountCheck={setAccountCheck}
              />
            </>
          ) : (
            <>
              <CheckCardInfo
                cardCheck={cardCheck}
                setCardCheck={setCardCheck}
              />
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
