export default function ConsumeRow({ data }) {
  let amountColor = data.amount > 0 ? "text-hana" : "text-orange-500";

  return (
    <div className="h-[84px] py-3 border-b flex flex-col">
      <div className="text-[0.6rem] py-1 text-gray-400 flex-1 flex justify-between">
        <div className="">{data.time}</div>
        <div className="">{data.type}</div>
      </div>
      <div className="flex-1 flex justify-between">
        <div className="text-sm font-bold">{data.target}</div>
        <div className="text-right">
          <div className={"text-sm font-bold " + amountColor}>
            {data.amount > 0 ? "+" : ""}
            {data.amount.toLocaleString("ko-KR")}원
          </div>
          <div className="text-[0.65rem] text-gray-500">
            {data.remain.toLocaleString("ko-KR")}원
          </div>
        </div>
      </div>
    </div>
  );
}
