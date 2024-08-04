export default function ConsumeRow({ data }) {
  let amountColor = data.amount.includes("+") ? "text-hana" : "text-orange-500";
  return (
    <div className="py-3 border-b flex flex-col">
      <div className="text-[0.6rem] py-1 text-gray-400 flex-1 flex justify-between">
        <div className="">{data.time}</div>
        <div className="">{data.type}</div>
      </div>
      <div className="flex-1 flex justify-between">
        <div className="text-sm font-bold">{data.target}</div>
        <div className="text-right">
          <div className={"text-sm font-bold " + amountColor}>
            {data.amount}
          </div>
          <div className="text-[0.65rem] text-gray-500">0,000원</div>
        </div>
      </div>
    </div>
  );
}
