import { ModalBody } from "@chakra-ui/react";

export default function Saving() {
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
