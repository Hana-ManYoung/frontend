import { IoIosArrowForward } from "react-icons/io";
import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import SavingAccount from "../components/SavingAccount";
import HanaMoneyPoint from "../components/HanaMoneyPoint";

export default function Section1({ savingData, hanaMoneyData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalId, setModalId] = useState(0);
  const [modalSize, setModalSize] = useState("lg");
  const [isSavingGiveUp, setIsSavingGiveUp] = useState(false);

  useEffect(() => {
    if (isSavingGiveUp) {
      // 챌린지 포기
      setModalId(3);
    }
    // onClose();
  }, [isSavingGiveUp]);

  useEffect(() => {
    if (modalId === 2) {
      setModalSize("sm");
    } else {
      setModalSize("lg");
    }
  }, [modalId]);

  const handleClick = (id) => {
    setModalId(id);
    onOpen();
  };

  return (
    <div className="flex-1">
      <div className="mt-4 w-full flex gap-5">
        <div className="w-[50%]">
          <h2 className="text-2xl font-bold">챌린지 적금</h2>
          <div
            class="h-20 mt-4 pl-6 pr-4 py-3 font-basic bg-gradient-to-r from-indigo-100 to-fuchsia-100 rounded-xl cursor-pointer shadow-md shadow-gray-200 hover:opacity-70 transition-all duration-300 ease-in-out flex justify-between items-center group"
            onClick={() => handleClick(1)}
          >
            <div className="flex items-center">
              <div>
                <div className="bg-white rounded-full">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/challenge/account.png"
                    }
                    alt=""
                    className="w-7 p-[0.2rem]"
                  />
                </div>
              </div>
              <div className="ml-2 text-gray-500">
                <h2 className="text-lg">{savingData.name}</h2>
                <div className="text-center text-[0.55rem]">
                  월 {savingData.monthlyMoney}원 ({savingData.remainMonth} 남음)
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-5 text-lg">
                <span className="text-gray-400">
                  {savingData.currentMoney.toLocaleString("ko-KR")}원{" "}
                </span>
                <span className="black">
                  / {savingData.targetMoney.toLocaleString("ko-KR")}원
                </span>
              </div>
              <IoIosArrowForward
                size="25"
                className="mr-1 text-gray-500 duration-300 group-hover:translate-x-2"
              />
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <h2 className="text-2xl font-bold">나의 하나머니</h2>
          <div
            class="h-20 mt-4 pl-6 pr-4 py-3 font-basic bg-gradient-to-r from-green-200 to-lime-100 rounded-xl cursor-pointer shadow-md shadow-gray-200 hover:opacity-70 transition-all duration-300 ease-in-out flex justify-between items-center group"
            onClick={() => handleClick(2)}
          >
            <div className="flex items-center">
              <img
                src={
                  process.env.PUBLIC_URL + "/images/hana/hana_money_rounded.png"
                }
                alt=""
                className="w-6"
              />
              <p className="ml-2 text-lg text-gray-500">
                하나머니 챌린지 포인트
              </p>
            </div>
            <div className="flex items-center">
              <div className="mr-5 text-xl font-bold">
                {hanaMoneyData.total.toLocaleString("ko-KR")}P
              </div>
              <IoIosArrowForward
                size="25"
                className="mr-1 text-gray-500 duration-300 group-hover:translate-x-2"
              />
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} size={modalSize} isCentered>
        <ModalOverlay />
        <ModalContent>
          {modalId === 1 ? (
            <SavingAccount
              savingData={savingData}
              setIsSavingGiveUp={setIsSavingGiveUp}
            />
          ) : (
            <HanaMoneyPoint pointData={hanaMoneyData.pointData} />
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
