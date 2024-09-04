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
import CheckCardModal from "../components/CheckCardModal";
import axios from "axios";
import { useSelector } from "react-redux";
import LoadingSkeleton from "../../../common/LoadingSkeleton";
export default function Section2({ savingData, hanaMoneyData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalId, setModalId] = useState(0);
  const [modalSize, setModalSize] = useState("lg");
  const [isSavingGiveUp, setIsSavingGiveUp] = useState(false);

  const [account, setAccount] = useState("");
  const [challengeAccount, setChallengeAccount] = useState("");
  const [card, setCard] = useState("");
  const [cardTransaction, setCardTransaction] = useState([]);
  const [accountTransactions, setAccountTransactions] = useState([]);
  const [accountChallengeTransactions, setAccountChallengeTransactions] =
    useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const getProfileInfo = async () => {
      setIsLoading(true);
      try {
        const result = await axios.get(`
          http://localhost:8081/api/profile/${user.user_login_id}`);
        setAccount(result.data.accountList[0]);
        setChallengeAccount(result.data.accountList[2]);
        setCard(result.data.card);
        setCardTransaction(result.data.cardTransactions);
        setAccountTransactions(result.data.accountTransactions);
        setAccountChallengeTransactions(
          result.data.accountChallengeTransactions
        );
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getProfileInfo();
  }, [user.user_login_id]);

  useEffect(() => {
    if (modalId === 1) {
      setModalSize("lg");
    } else {
      setModalSize("sm");
    }
  }, [modalId]);

  const handleClick = (id) => {
    setModalId(id);
    onOpen();
  };

  if (isLoading) return <LoadingSkeleton />; // Loading Spinner

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
              challengeAccount={challengeAccount}
              handleClick={handleClick}
            />
          </div>
        </div>
        <div className="mt-2 w-full flex justify-between gap-4">
          <div className="w-[50%]">
            <HanaAccountInfo account={account} handleClick={handleClick} />
          </div>
          <div className="w-[50%]">
            <CheckCardInfo handleClick={handleClick} card={card} />
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
            <HanaMoneyPoint pointData={accountChallengeTransactions} />
          ) : modalId === 3 ? (
            <ConsumeRowBoxModal accountTransactions={accountTransactions} />
          ) : (
            <CheckCardModal cardTransaction={cardTransaction} />
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
