import { ModalBody } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getKoreanNumber } from "../../../../js/getKoreanNumber";

export default function Saving() {
  const [targetAmount, setTargetAmount] = useState("");
  const [monthlyAmount, setMonthlyAmount] = useState(0);
  const [challengeSavingName, setChallengeSavingName] = useState("");
  const [challengeDuration, setChallengeDuration] = useState(1);

  useEffect(() => {
    setMonthlyAmount(targetAmount / challengeDuration);
  }, [targetAmount, challengeDuration]);

  return (
    <ModalBody>
      <div className="w-full flex gap-5">
        <div className="w-[50%] mt-5">
          <h2 className="ml-2">챌린지 적금 이름</h2>
          <input
            type="text"
            className="w-full h-14 mt-2 pl-5 text-lg border-2 rounded-2xl border-gray-400"
            placeholder="적금명 입력"
            onChange={(e) => setChallengeSavingName(e.target.value)}
          />
        </div>
        <div className="w-[50%] mt-5">
          <h2 className="ml-2">기간</h2>
          <div className="relative">
            <input
              type="text"
              className="w-full h-14 mt-2 pl-5 text-lg border-2 rounded-2xl border-gray-400"
              placeholder="입력"
              onChange={(e) => setChallengeDuration(e.target.value)}
            />
            <div className="absolute top-6 right-3 text-right text-gray-400">
              {challengeDuration}달
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="ml-2">목표금액</h2>
        <div className="relative">
          <input
            type="text"
            className="w-full h-14 mt-2 pl-5 text-lg border-2 rounded-2xl border-gray-400"
            placeholder="금액 입력"
            onChange={(e) => setTargetAmount(e.target.value)}
          />
          <div className="absolute top-6 right-3 text-right text-gray-400">
            {getKoreanNumber(targetAmount)}
          </div>
        </div>
      </div>
      <div className="w-full mt-3 py-3 bg-slate-50 flex flex-col justify-end items-center rounded-2xl">
        <p className="my-2 ml-2 text-2xl">
          월 납입액은
          <span className="mx-2 text-2xl text-orange-500">
            {getKoreanNumber(monthlyAmount)}
          </span>
          입니다
        </p>
        <p className="text-gray-500">
          목표금액:{" "}
          <span className="text-hana">{getKoreanNumber(targetAmount)}</span> ={" "}
          {getKoreanNumber(monthlyAmount)} x {challengeDuration}달
        </p>
      </div>
      <div className="my-8 py-3 text-center text-xl text-white btn-hana-blue rounded-lg hover:opacity-85 cursor-pointer transition-all duration-300">
        챌린지 적금 시작하기
      </div>
    </ModalBody>
  );
}
