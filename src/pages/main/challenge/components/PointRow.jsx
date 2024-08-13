export default function PointRow({ data, type }) {
  let amountColor = data.amount.includes("+") ? "text-hana" : "text-orange-500";
  return (
    <div className="py-3 border-t font-basic flex flex-col">
      <div className="text-xs py-1 text-gray-400 flex-1 flex justify-between">
        <div className="">{data.time}</div>
        <div className="">{data.type}</div>
      </div>
      <div className="flex-1 flex justify-between">
        <div className="text-sm font-bold">포인트 적립</div>
        <div className="text-right">
          <div className={amountColor}>{data.amount}</div>
          <div className="text-xs bg-gradient-to-l from-indigo-500 to-fuchsia-500 text-transparent bg-clip-text">
            0,000원
          </div>
        </div>
      </div>
    </div>
  );
}
