import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import CheckCardInfo from "../components/CheckCardInfo";
import HanaAccountInfo from "../components/HanaAccountInfo";
import SavingAccount from "../../challenge/components/SavingAccount";
import HanaMoneyPoint from "../../challenge/components/HanaMoneyPoint";
import { useEffect, useState } from "react";
import SavingCard from "../../../common/SavingCard";
import HanaMoneyCard from "../../../common/HanaMoneyCard";
import ConsumeRowBoxModal from "../components/ConsumeRowBoxModal";
export default function Section2({ savingData, hanaMoneyData, consumeData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalId, setModalId] = useState(0);
  const [modalSize, setModalSize] = useState("lg");
  const [isSavingGiveUp, setIsSavingGiveUp] = useState(false);

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
    <div className="mt-8 py-6 bg-gradient-to-t from-slate-100 to-gray-200 rounded-xl shadow-md">
      <div className="ml-4 flex items-center">
        <img
          src={process.env.PUBLIC_URL + "/images/hana/asset.png"}
          alt=""
          className="w-7 h-7"
        />
        <h1 className="ml-2 text-2xl text-gray-600 font-bold">내 자산</h1>
      </div>
      <div className="w-[95%] mx-auto mt-3 px-4 pb-4 bg-white rounded-xl">
        <div className="w-full flex justify-between gap-4">
          <div className="w-[50%]">
            <SavingCard savingData={savingData} handleClick={handleClick} />
          </div>
          <div className="w-[50%]">
            <HanaMoneyCard
              hanaMoneyData={hanaMoneyData}
              handleClick={handleClick}
            />
          </div>
        </div>
        <div className="mt-2 w-full flex justify-between gap-4">
          <div className="w-[50%]">
            <HanaAccountInfo handleClick={handleClick} />
          </div>
          <div className="w-[50%]">
            <CheckCardInfo handleClick={handleClick} />
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
          ) : modalId === 2 ? (
            <HanaMoneyPoint pointData={hanaMoneyData.pointData} />
          ) : modalId === 3 ? (
            <ConsumeRowBoxModal consumeData={consumeData} />
          ) : (
            <></>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
