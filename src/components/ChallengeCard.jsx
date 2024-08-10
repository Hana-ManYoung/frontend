import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaCircleDot } from "react-icons/fa6";
import { FaRegCircleDot } from "react-icons/fa6";
import axios from "axios";
import { SERVER_URL } from "../etc/url";
import LoadingModal from "./LoadingModal";

export default function ChallengeCard({ data, bg, imgUrl }) {
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalSize, setModalSize] = useState("lg");
  const [isProceeding, setIsProceeding] = useState(true);

  const handleClick = () => {
    if (data.id === 1) {
      console.log("소비계획/가계부 페이지 전환");
      navigate(process.env.PUBLIC_URL + "/main/challenge/diary");
    } else if (data.id === 0) {
      setModalSize("sm");
      onOpen();
    } else if (data.id === 3) {
      window.open("https://minjae-vincent.github.io/");
    } else {
      setModalSize("lg");
      onOpen();
    }
  };
  return (
    <div
      className={
        "w-[50%] h-28 px-4 py-4 text-2xl font-basic rounded-lg flex items-center justify-between shadow-md shadow-gray-200 hover:opacity-70 transition-all duration-300 ease-in-out cursor-pointer group " +
        bg
      }
      onClick={() => handleClick()}
    >
      <div className="ml-2">
        <div className="flex items-center">
          <img
            src={process.env.PUBLIC_URL + imgUrl}
            alt=""
            className="mr-2 w-5"
          />
          <h1 className="text-xl">{data.name}</h1>
        </div>
        <p className="text-xs text-gray-500">{data.explain}</p>
      </div>
      <div className="flex items-center">
        <div className="text-xl font-bold mr-5">
          {data.point !== "" ? (
            <>{data.point + "P"}</>
          ) : isProceeding ? (
            "진행중"
          ) : (
            "참여하기"
          )}
        </div>
        <IoIosArrowForward
          size="25"
          className="mr-1 text-gray-500 duration-300 group-hover:translate-x-2"
        />
      </div>
      <Modal isOpen={isOpen} onClose={onClose} size={modalSize} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ChallengeContent data={data} />
        </ModalContent>
      </Modal>
    </div>
  );
}

function ChallengeContent({ data }) {
  return [
    <>
      <ModalHeader>
        <div className="flex items-center">
          <img
            src={process.env.PUBLIC_URL + data.url}
            alt=""
            className="mr-2 w-5"
          />
          <h1 className="text-xl">{data.name}</h1>
        </div>
      </ModalHeader>
      <ModalCloseButton />
      <Quiz />
    </>,
    <></>,
    <>
      <ModalHeader>
        <div className="flex items-center">
          <img
            src={process.env.PUBLIC_URL + data.url}
            alt=""
            className="mr-2 w-5"
          />
          <h1 className="text-xl">{data.name}</h1>
        </div>
      </ModalHeader>
      <ModalCloseButton />
      <Saving />
    </>,
    <></>,
    <>
      <ModalHeader>
        <div className="flex items-center">
          <img
            src={process.env.PUBLIC_URL + data.url}
            alt=""
            className="mr-2 w-5"
          />
          <h1 className="text-xl">{data.name}</h1>
        </div>
      </ModalHeader>
      <ModalCloseButton />
      <PocketMoney />
    </>,
  ][data.id];
}

function Quiz() {
  const [selected, setSelected] = useState(0);
  const [quizData, setQuizData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const getQuiz = async () => {
        try {
          const result = await axios.get(SERVER_URL + "quiz.json");
          setQuizData(result.data.data[0]);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      };

      getQuiz();
    }, 3000);
  }, []);

  const handleSubmit = () => {
    if (selected === quizData.answer) {
      alert("정답입니다!");
    } else {
      alert("틀렸습니다!");
    }
  };

  if (isLoading) return <LoadingModal />;
  return (
    <ModalBody>
      <div className="text-xl font-basic">
        <div className="font-bold flex">
          <div className="mr-2 text-emerald-600">Q. </div>
          <div className="leading-8">{quizData.question}</div>
        </div>
        <div className="my-8">
          <div
            className={
              "my-3 px-4 py-5 border-2 rounded-xl cursor-pointer transition-all duration-300 flex items-center " +
              (selected === 0 ? "border-emerald-600" : "hover:opacity-60")
            }
            onClick={() => setSelected(0)}
          >
            {selected === 0 ? (
              <FaCircleDot className="mr-4 text-emerald-600" size="25" />
            ) : (
              <FaRegCircleDot className="mr-4 text-gray-400" size="25" />
            )}
            <p>① {quizData.options[0]}</p>
          </div>
          <div
            className={
              "my-3 px-4 py-5 border-2 rounded-xl cursor-pointer transition-all duration-300 flex items-center " +
              (selected === 1 ? "border-emerald-600" : "hover:opacity-60")
            }
            onClick={() => setSelected(1)}
          >
            {selected === 1 ? (
              <FaCircleDot className="mr-4 text-emerald-600" size="25" />
            ) : (
              <FaRegCircleDot className="mr-4 text-gray-400" size="25" />
            )}
            <p>② {quizData.options[1]}</p>
          </div>
          <div
            className={
              "my-3 px-4 py-5 border-2 rounded-xl cursor-pointer transition-all duration-300 flex items-center " +
              (selected === 2 ? "border-emerald-600" : "hover:opacity-60")
            }
            onClick={() => setSelected(2)}
          >
            {selected === 2 ? (
              <FaCircleDot className="mr-4 text-emerald-600" size="25" />
            ) : (
              <FaRegCircleDot className="mr-4 text-gray-400" size="25" />
            )}
            <p>③ {quizData.options[2]}</p>
          </div>
          <div
            className={
              "my-3 px-4 py-5 border-2 rounded-xl cursor-pointer transition-all duration-300 flex items-center " +
              (selected === 3 ? "border-emerald-600" : "hover:opacity-60")
            }
            onClick={() => setSelected(3)}
          >
            {selected === 3 ? (
              <FaCircleDot className="mr-4 text-emerald-600" size="25" />
            ) : (
              <FaRegCircleDot className="mr-4 text-gray-400" size="25" />
            )}
            <p>④ {quizData.options[3]}</p>
          </div>
        </div>
      </div>
      <div
        className="mb-4 py-3 text-white text-xl text-center rounded-xl btn-hana-green cursor-pointer hover:opacity-85 transition-all duration-300"
        onClick={() => handleSubmit()}
      >
        제출하기
      </div>
    </ModalBody>
  );
}

function Saving() {
  return (
    <ModalBody>
      <div className="mt-5">
        <h2 className="ml-2 text-xl">목표 금액</h2>
        <input
          type="text"
          className="w-full h-16 mt-2 pl-5 text-xl border-2 rounded-2xl border-gray-400"
          placeholder="금액 입력"
        />
      </div>
      <div className="mt-5">
        <h2 className="ml-2 text-xl">월납입액</h2>
        <input
          type="text"
          className="w-full h-16 mt-2 pl-5 text-xl border-2 rounded-2xl border-gray-400"
          placeholder="금액 입력"
        />
      </div>
      <div className="mt-5">
        <h2 className="ml-2 text-xl">기간</h2>
        <input
          type="text"
          className="w-full h-16 mt-2 pl-5 text-xl border-2 rounded-2xl border-gray-400"
          placeholder="금액 입력"
        />
      </div>
      <div className="my-10 py-3 text-center text-xl bg-gradient-to-r from-green-300 to-lime-200 rounded-lg hover:opacity-85 cursor-pointer transition-all duration-300">
        챌린지 적금 시작하기
      </div>
    </ModalBody>
  );
}

function PocketMoney() {
  return (
    <ModalBody>
      <div className="mt-5">
        <h2 className="ml-2 text-xl">금액</h2>
        <input
          type="text"
          className="w-full h-16 mt-2 pl-5 text-xl border-2 rounded-2xl border-gray-400"
          placeholder="금액 입력"
        />
      </div>
      <div className="my-10 py-3 text-center text-white text-xl btn-hana-blue rounded-lg hover:opacity-85 cursor-pointer transition-all duration-300">
        용돈 조르기
      </div>
      <div className="px-2">
        <h2 className="text-xl font-bold">받은 미션</h2>
        <div className="my-12 font-basic text-center">
          아직 부모님께 받은 챌린지가 없어요
        </div>
      </div>
      <div className="my-4 py-3 text-center text-white text-xl btn-hana-blue rounded-lg hover:opacity-85 cursor-pointer transition-all duration-300">
        완료 요청하기
      </div>
      <div className="my-3 px-2 py-3 text-lg text-center rounded-md bg-gradient-to-r from-indigo-200 to-fuchsia-200 transform hover:opacity-85 duration-300 cursor-pointer flex justify-center">
        <div className="flex items-center">
          <img
            src={process.env.PUBLIC_URL + "/images/hana/hana_money_rounded.png"}
            alt=""
            className="w-6 mr-2"
          />
          <p>하나머니 챌린지 포인트 적립</p>
        </div>
      </div>
    </ModalBody>
  );
}
