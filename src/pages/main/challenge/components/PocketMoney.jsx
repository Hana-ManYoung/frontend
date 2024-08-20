import { ModalBody } from "@chakra-ui/react";

export default function PocketMoney() {
  return (
    <ModalBody>
      <div className="mt-5">
        <h2 className="ml-2 text-xl">금액</h2>
        <input
          type="text"
          className="w-full h-16 mt-2 pl-5 text-xl border-2 rounded-2xl border-gray-400"
          placeholder="금액 입력"
        />
      </div>
      <div className="my-10 py-3 text-center text-white text-xl btn-hana-blue rounded-lg hover:opacity-85 cursor-pointer transition-all duration-300">
        용돈 조르기
      </div>
      <div className="px-2">
        <h2 className="text-xl font-bold">받은 미션</h2>
        <div className="my-12 font-basic text-center">
          아직 부모님께 받은 챌린지가 없어요
        </div>
      </div>
      <div className="my-4 py-3 text-center text-white text-xl btn-hana-blue rounded-lg hover:opacity-85 cursor-pointer transition-all duration-300">
        완료 요청하기
      </div>
      <div className="my-3 px-2 py-3 text-lg text-center rounded-md bg-gradient-to-r from-indigo-200 to-fuchsia-200 transform hover:opacity-85 duration-300 cursor-pointer flex justify-center">
        <div className="flex items-center">
          <img
            src={process.env.PUBLIC_URL + "/images/hana/hana_money_rounded.png"}
            alt=""
            className="w-6 mr-2"
          />
          <p>하나머니 챌린지 포인트 적립</p>
        </div>
      </div>
    </ModalBody>
  );
}
