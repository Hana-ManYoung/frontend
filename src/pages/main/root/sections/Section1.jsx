import { useNavigate } from "react-router-dom";
import MainCard from "../components/MainCard";
import { useEffect, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { LOGIN_URL } from "../../../../etc/url";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { init } from "../../../../redux/user";

export default function Section1() {
  const [isLogin, setIsLogin] = useState(false);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user.user_login_id) {
      setIsLogin(true);
    }
  }, [user]);
  return (
    <div className="mt-4 text-2xl">
      {isLogin ? <MainTitle /> : <div>하나만영에 오신 것을 환영해요😃</div>}
      <div className="mt-6 flex justify-evenly items-center">
        {isLogin ? <LoginInfo /> : <LoginBox setIsLogin={setIsLogin} />}
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
  return (
    <h2 className="font-bold flex items-center">
      규은님이 필요할 것 같아 준비했어요
      <img
        src={process.env.PUBLIC_URL + "/images/icons/smile.png"}
        width="25px"
        className="ml-2"
        alt=""
      />
    </h2>
  );
}

function LoginInfo() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  return (
    <div className="w-[50%] py-3 text-center text-base text-gray-500 bg-gradient-to-t from-indigo-100 to-fuchsia-100 rounded-xl">
      <p>
        <strong>{user.user_name.slice(1, 3)}</strong>님의 소비 유형
      </p>
      <img
        src={process.env.PUBLIC_URL + "/images/ayj/2.png"}
        width="35%"
        className="mx-auto"
        alt=""
      />
      <p className="mt-2">간편 소비형</p>
      <div
        className="w-[45%] mx-auto py-1 text-center text-xl text-black "
        onClick={() => navigate(process.env.PUBLIC_URL + "/planner")}
      >
        <span className="border-b border-black text-gray-500 cursor-pointer hover:opacity-40 transition-all duration-300 ease-in-out">
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
      // if (event.origin !== window.location.origin) return; // 보안 상 출처 확인

      if (success) {
        try {
          const result = await axios.get(
            "http://localhost:8080/user/" + userId
          );
          dispatch(init(result.data));
          // TODO:  로그인 정보 localStorage에 저장
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
  }, [onClose]);

  return (
    <div className="w-[50%] h-[300px] text-center text-gray-500 bg-gradient-to-t from-indigo-100 to-fuchsia-100 rounded-xl flex flex-col justify-center items-center">
      <p className="text-base">간편하게 로그인하고</p>
      <p className="text-xl font-bold">디양한 서비스를 이용하세요</p>
      <p
        className={`mt-5 text-lg border-b border-gray-500 cursor-pointer hover:opacity-85 duration-300 ${
          animate ? "animate__animated animate__tada" : ""
        }`}
        // onClick={() => navigate(process.env.PUBLIC_URL + "/login")}
        onClick={onOpen}
      >
        로그인하러 가기
      </p>
      <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>로그인</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <iframe src={LOGIN_URL} width="100%" height="330"></iframe>
            <div className="pb-5 mt-2">
              <h2 className="ml-3 text-sm">아직 회원이 아니라면?</h2>
              <button
                type="submit"
                className="w-[97%] mt-2 ml-2 py-3 text-center text-xl text-white btn-hana-blue rounded-xl cursor-pointer hover:opacity-85 transition-all duration-300 ease-in-out"
                onClick={() => navigate("/register")}
              >
                회원가입
              </button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
