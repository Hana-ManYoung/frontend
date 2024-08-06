import { IoIosArrowForward } from "react-icons/io";
import { challengeInfo } from "../data/challengeInfo";
import ChallengeCard from "../components/ChallengeCard";
import Calendar from "../components/Calendar";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { pointData } from "../data/pointData";
import PointRow from "../components/PointRow";

export default function Challenge() {
  return (
    <div className="w-[90%] mx-auto flex-1 flex flex-col animate__animated animate__fadeIn">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

function Section1() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="flex-1">
      <div className="mt-4 w-full flex gap-5">
        <div className="w-[50%]">
          <h2 className="text-2xl font-bold">챌린지 적금</h2>
          <div class="h-20 mt-4 pl-6 pr-4 py-3 font-basic bg-gradient-to-r from-indigo-100 to-fuchsia-100 rounded-xl shadow-md shadow-gray-200 flex">
            <div className="w-[50%] text-gray-500 flex flex-col justify-center">
              <div className="flex items-center">
                <div>
                  <div className="bg-white rounded-full">
                    <img
                      src="/challenge/account.png"
                      alt=""
                      className="w-7 p-[0.2rem]"
                    />
                  </div>
                </div>
                <div className="ml-2">
                  <p className="text-lg">에어팟 구매 </p>
                  <div className="text-center text-[0.55rem]">
                    월 30,000원 (1달 남음)
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[50%] flex items-center">
              <div className="text-xl font-bold">90,000원 / 120,000원</div>
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <h2 className="text-2xl font-bold">나의 하나머니</h2>
          <div
            class="h-20 mt-4 pl-6 pr-4 py-3 font-basic bg-gradient-to-r from-green-200 to-lime-100 rounded-xl cursor-pointer shadow-md shadow-gray-200 hover:opacity-70 transition-all duration-300 ease-in-out flex justify-between items-center group"
            onClick={() => onOpen()}
          >
            <div className="flex items-center">
              <img src="/hana_money_rounded.png" alt="" className="w-6" />
              <p className="ml-2 text-lg text-gray-500">
                하나머니 챌린지 포인트
              </p>
            </div>
            <div className="flex items-center">
              <div className="mr-5 text-xl font-bold">3,000P</div>
              <IoIosArrowForward
                size="25"
                className="mr-1 text-gray-500 duration-300 group-hover:translate-x-2"
              />
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered>
        <ModalOverlay />
        <ModalContent>
          <HanaMoneyPoint />
        </ModalContent>
      </Modal>
    </div>
  );
}

function HanaMoneyPoint() {
  return (
    <>
      <ModalHeader>
        <div className="font-bold flex items-center">
          <div className="flex items-center">
            <img src="/hana_money_rounded.png" alt="" className="w-5" />
            <p className="ml-2">하나머니 챌린지 포인트</p>
          </div>
        </div>
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <div className="h-96 ml-3 pr-3 overflow-y-auto">
          {pointData.map((data, index) => (
            <PointRow key={index} data={data} type={"point"} />
          ))}
        </div>
      </ModalBody>
    </>
  );
}

function Section2() {
  return (
    <div className="mt-8 flex-1">
      <h1 className="text-2xl font-bold flex items-center">
        금주의 챌린지
        <img src="/flame.png" width="35px" className="ml-1" alt="" />
      </h1>
      <div className="mt-4 flex gap-5">
        <ChallengeCard data={challengeInfo[0]} />
        <ChallengeCard data={challengeInfo[1]} />
      </div>
      <div className="mt-4 flex gap-5">
        <ChallengeCard data={challengeInfo[2]} />
        <ChallengeCard data={challengeInfo[3]} />
      </div>
      <div className="mt-4 flex gap-5">
        <ChallengeCard data={challengeInfo[4]} />
        <div className="w-[50%]"></div>
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="mt-8 w-full flex">
      <div className="w-full">
        <h2 className="text-2xl font-bold">챌린지 참여 현황</h2>
        <Calendar />
      </div>
    </div>
  );
}
