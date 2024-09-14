import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BANK_CARD_URL, MAN_YOUNG_URL } from "../../../etc/url";
import { FiSend } from "react-icons/fi";
import axios from "axios";
import FriendCard from "./components/FriendCard";
import ReceiveMessage from "./components/ReceiveMessage";
import SendMessage from "./components/SendMessage";
import Loading from "../../common/Loading";
import AccountInfo from "./components/AccountInfo";
import { RiMessage2Line } from "react-icons/ri";
import ChallengeCurrent from "./components/ChallengeCurrent";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

export default function Chat() {
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector((state) => state.user);
  const [relationList, setRelationList] = useState([]);
  const [account, setAccount] = useState({});
  const [challengeToday, setChallengeToday] = useState({});
  const [challengeInfo, setChallengeInfo] = useState([]);
  const [selectFriend, setSelectFriend] = useState({});
  const [selectModal, setSelectModal] = useState(0);

  const { onOpen, isOpen, onClose } = useDisclosure();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [relationResponse, challengeResponse, bankResponse] =
          await Promise.all([
            axios.get(
              `${MAN_YOUNG_URL}/user/relation/get/${user.user_login_id}`
            ),
            axios.get(
              `${MAN_YOUNG_URL}/challenge/get/total/${user.user_login_id}`
            ),
            axios.get(`${BANK_CARD_URL}/api/profile/${user.user_login_id}`),
          ]);

        setRelationList(
          relationResponse.data.relationList.filter(
            (item) => item.relation_user_type === "RT_02"
          )
        );
        setAccount(bankResponse.data.accountList[0]);

        setChallengeToday(challengeResponse.data.todayChallenge);
        setChallengeInfo(challengeResponse.data.challengeInfo);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [user.user_login_id]);

  if (isLoading) return <Loading />;

  return (
    <div className="w-[90%] mx-auto animate__animated animate__fadeIn">
      <div className="mt-4 flex items-center gap-1">
        <h1 className="pt-1 text-3xl font-bold">채팅</h1>
        <RiMessage2Line size="30" />
      </div>
      <div className="mt-6 flex gap-5">
        <div className="w-[35%] flex flex-col gap-5">
          <div className="h-[50%] bg-gradient-to-r from-cyan-200 to-cyan-100 rounded-xl p-3">
            <div className="font-bold text-lg text-gray-500">친구 목록</div>
            <div className="mt-1 h-56 bg-white rounded-lg text-sm overflow-y-auto">
              {relationList.map((data, index) => {
                return (
                  <FriendCard
                    data={data}
                    key={index}
                    setSelectFriend={setSelectFriend}
                  />
                );
              })}
            </div>
          </div>
          <ChallengeCurrent
            challengeToday={challengeToday}
            challengeInfo={challengeInfo}
            setSelectModal={setSelectModal}
            onOpen={onOpen}
          />
          <AccountInfo
            data={account}
            setSelectModal={setSelectModal}
            onOpen={onOpen}
          />
        </div>
        <div className="w-[65%]">
          <div className="relative bg-blue-100 h-[600px] rounded-xl overflow-y-auto">
            <div className="absolute w-full top-0 px-5 py-2 font-bold bg-slate-700 text-white text-xl rounded-xl">
              {Object.keys(selectFriend).length === 0
                ? "대화 상대를 선택해주세요"
                : selectFriend.relation_user_name + "님"}
            </div>
            <div className="absolute w-[97.5%] h-[465px] mx-auto left-0 right-0 top-[60px] font-basic text-base">
              {Object.keys(selectFriend).length === 0 ? (
                <div className="h-[465px] flex items-center justify-center">
                  메시지가 없어요
                </div>
              ) : (
                <div className="animate__animated animate__fadeIn">
                  <ReceiveMessage />
                  <SendMessage />
                </div>
              )}
            </div>
            <div className="absolute w-full bottom-0 font-basic">
              <div className="relative w-[95%] mx-auto mb-2">
                <input
                  type="text"
                  className="w-full h-12 border rounded-3xl text-xl px-5"
                />
                <div className="absolute h-12 top-0 right-1 flex items-center">
                  <div className="p-3 rounded-full bg-blue-50 h-10">
                    <FiSend size="20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} isCentered="true" size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {selectModal === 0 ? "챌린지 공유" : "간편 송금"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ModalArray
              selectFriend={selectFriend}
              selectModal={selectModal}
              challengeToday={challengeToday}
              challengeInfo={challengeInfo}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

function ModalArray({
  selectFriend,
  selectModal,
  challengeToday,
  challengeInfo,
}) {
  if (Object.keys(selectFriend).length === 0)
    return <div>친구를 선택해주세요</div>;

  return [
    <div>
      <div className="text-center">
        <p>오늘의 챌린지 성공 횟수</p>
        <p className="text-xl">
          {challengeToday.length}/{challengeInfo.length}
        </p>
      </div>
      <div className="mt-1 font-basic text-sm text-gray-500 flex justify-center gap-1">
        (
        {challengeToday.map((challenge, index) => {
          return <p key={index}>{challenge.code_name}</p>;
        })}
        )
      </div>
      <p className="mt-4 text-center">
        <strong className="mx-1">{selectFriend.relation_user_name}</strong>님께
        오늘의 챌린지 현황을 공유할까요?
      </p>
      <div className="my-3 py-2 btn-hana-blue text-white rounded-lg text-center hover:opacity-80 duration-300 cursor-pointer">
        공유하기
      </div>
    </div>,
    <div>
      <p className="mb-2">
        <strong>{selectFriend.relation_user_name}</strong>님께 송금할 금액을
        입력해주세요
      </p>
      <input
        type="number"
        className="w-full px-3 h-12 border rounded-xl text-base"
        placeholder="금액 입력"
      />
      <div className="mt-4 mb-4 py-2 text-center rounded-lg btn-hana-green text-white hover:opacity-80 duration-300 cursor-pointer">
        송금하기
      </div>
    </div>,
  ][selectModal];
}
