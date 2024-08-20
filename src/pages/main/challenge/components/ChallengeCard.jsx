import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import ChallengeContent from "./ChallengeContent";

export default function ChallengeCard({ data, bg, imgUrl }) {
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalSize, setModalSize] = useState("lg");
  const [isProceeding, setIsProceeding] = useState(true);

  const handleClick = () => {
    if (data.id === 1) {
      console.log("소비계획/가계부 페이지 전환");
      navigate(process.env.PUBLIC_URL + "/challenge/diary");
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
