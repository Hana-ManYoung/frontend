import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function ChallengeCard({ data }) {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = () => {
    if (data.id === 1) {
      console.log("소비계획/가계부 페이지 전환");
      navigate("/main/planner");
    } else if (data.id === 3) {
      window.open("https://minjae-vincent.github.io/");
    } else {
      onOpen();
    }
  };
  return (
    <div
      className={
        "w-[50%] h-28 px-4 py-4 text-2xl font-basic rounded-lg flex items-center justify-between shadow-md shadow-gray-200 hover:opacity-70 transition-all duration-300 ease-in-out cursor-pointer group " +
        data.bg
      }
      onClick={() => handleClick()}
    >
      <div className="ml-2">
        <div className="flex items-center">
          <h1 className="text-xl">{data.name}</h1>
          <img src={data.url} alt="" className="ml-2 w-5" />
        </div>
        <p className="text-xs text-gray-500">{data.explain}</p>
      </div>
      <div className="flex items-center">
        <div className="text-xl font-bold mr-5">{data.point}</div>
        <IoIosArrowForward
          size="25"
          className="mr-1 text-gray-500 duration-300 group-hover:translate-x-2"
        />
      </div>
      <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ChallengeContent id={data.id} />
        </ModalContent>
      </Modal>
    </div>
  );
}

function ChallengeContent({ id }) {
  return [
    <>
      <ModalHeader>오늘의 퀴즈</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <div>퀴즈 문제</div>
      </ModalBody>
    </>,
    <></>,
    <>
      <ModalHeader>하나머니 챌린지 포인트</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <div>챌린지 적금 모달</div>
      </ModalBody>
    </>,
    <></>,
    <>
      <ModalHeader>용돈 조르기</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <div>어떻게 조를건지</div>
      </ModalBody>
    </>,
  ][id];
}
