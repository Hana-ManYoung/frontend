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
import { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart } from "recharts";

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
                <h2 className="text-lg">에어팟 구매</h2>
                <div className="text-center text-[0.55rem]">
                  월 30,000원 (1달 남음)
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-5 text-lg">
                <span className="text-gray-400">90,000원 </span>
                <span className="black">/ 120,000원</span>
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
              <div className="mr-5 text-xl font-bold">3,000P</div>
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
            <SavingAccount setIsSavingGiveUp={setIsSavingGiveUp} />
          ) : (
            <HanaMoneyPoint />
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

function SavingAccount({ setIsSavingGiveUp }) {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const handleGiveUpClick = () => {
  //   onClose();
  //   setIsSavingGiveUp(true);
  // };
  return (
    <>
      <ModalHeader>
        <div className="font-bold flex items-center">
          <div className="flex items-center">
            <img
              src={process.env.PUBLIC_URL + "/images/challenge/account.png"}
              alt=""
              className="w-7 p-[0.2rem]"
            />
            <p className="ml-2">챌린지 적금</p>
          </div>
        </div>
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <div className="ml-3 font-basic">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold">
              에어팟 구매{" "}
              <span className="ml-2 text-gray-400 text-xs font-normal">
                7월 21일 ~ 10월 21일
              </span>
            </h3>
            <div
              className="px-2 py-1 text-sm rounded-md bg-red-400 transform hover:opacity-85 duration-300 cursor-pointer"
              // onClick={() => onOpen()}
            >
              포기하기
            </div>
          </div>
          <div className="pr-3 overflow-y-auto">
            <HalfDoughnutChart />
            <div className="flex justify-between">
              <div className="w-[45%] flex justify-between items-center">
                <p className="text-gray-400 text-sm">목표 금액</p>
                <p className="font-bold">120,000원</p>
              </div>
              <div className="border"></div>
              <div className="w-[45%] flex justify-between items-center">
                <p className="text-gray-400 text-sm">남은 기간</p>
                <p className="font-bold">1달</p>
              </div>
            </div>
            <div className="my-2 flex justify-between">
              <div className="w-[45%] flex justify-between items-center">
                <p className="text-gray-400 text-sm">현재 금액</p>
                <p className="font-bold">90,000원</p>
              </div>
              <div className="border"></div>
              <div className="w-[45%] flex justify-between items-center">
                <p className="text-gray-400 text-sm">남은 금액</p>
                <p className="font-bold">30,000원</p>
              </div>
            </div>
            <div className="my-2 flex justify-between">
              <div className="w-[45%] flex justify-between items-center">
                <p className="text-gray-400 text-sm">적립 포인트</p>
                <p className="font-bold">250P</p>
              </div>
              {/* <div className="border"></div> */}
              <div className="w-[45%] flex justify-between items-center"></div>
            </div>
          </div>
        </div>
        <div className="my-3 px-2 py-3 text-lg text-center rounded-md bg-gradient-to-r from-indigo-200 to-fuchsia-200 transform hover:opacity-85 duration-300 cursor-pointer flex justify-center">
          <div className="flex items-center">
            <img
              src={
                process.env.PUBLIC_URL + "/images/hana/hana_money_rounded.png"
              }
              alt=""
              className="w-6 mr-2"
            />
            <p>하나머니 챌린지 포인트 적립</p>
          </div>
        </div>
      </ModalBody>
    </>
  );
}

function HanaMoneyPoint() {
  return (
    <>
      <ModalHeader>
        <div className="font-bold flex items-center">
          <div className="flex items-center">
            <img
              src={
                process.env.PUBLIC_URL + "/images/hana/hana_money_rounded.png"
              }
              alt=""
              className="w-5"
            />
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
        <img
          src={process.env.PUBLIC_URL + "/images/icons/flame.png"}
          width="35px"
          className="ml-1"
          alt=""
        />
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
      <div className="relative w-full">
        <h2 className="text-2xl font-bold">챌린지 참여 현황</h2>
        <img
          src={process.env.PUBLIC_URL + "/images/challenge/star_soon1.png"}
          className="absolute w-32 z-10 -top-[4.5rem] right-8"
          alt=""
        />
        <img
          src={process.env.PUBLIC_URL + "/images/challenge/star_soon2.png"}
          className="absolute w-24 z-10 -top-[4.25rem] right-40"
          alt=""
        />
        <Calendar />
      </div>
    </div>
  );
}

const HalfDoughnutChart = () => {
  const data = [
    { name: "현재 금액", value: 90000, color: "#9a9ef7" },
    { name: "남은 금액", value: 30000, color: "#acadc6" },
  ];

  return (
    <div className="flex justify-center">
      <PieChart width={300} height={200}>
        <Pie
          data={data}
          cy={125}
          innerRadius={60}
          outerRadius={100}
          startAngle={180}
          endAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Legend
          cy={100}
          wrapperStyle={{
            bottom: 20, // 위치 조정
          }}
        />
      </PieChart>
    </div>
  );
};
