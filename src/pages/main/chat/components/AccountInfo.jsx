export default function AccountInfo({ data, setSelectModal, onOpen }) {
  return (
    <div
      className="h-[25%] bg-gradient-to-r text-white  from-teal-600 to-emerald-600 rounded-xl px-5 py-3 font-basic"
      onClick={() => setSelectModal(1)}
    >
      <div className="flex items-center">
        <h2 className="text-lg font-hana font-bold">간편 송금</h2>
        <div className="ml-2 bg-white rounded-full p-1">
          <img
            src={process.env.PUBLIC_URL + "/images/hana/logo.png"}
            alt=""
            className="w-4"
          />
        </div>
      </div>
      <div className="pt-1 text-xs flex justify-between">
        <p>계좌번호</p>
        <p>{data.acc_num}</p>
      </div>
      <div className="pt-1 text-lg flex justify-between">
        <p>잔액</p>
        <p>{data.acc_balance.toLocaleString("ko-KR")}원</p>
      </div>
      <div
        className="mt-2 py-2 bg-white font-bold cursor-pointer hover:opacity-80 duration-300 rounded-xl text-center text-hana"
        onClick={() => onOpen()}
      >
        송금하기
      </div>
    </div>
  );
}
