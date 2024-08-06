import { FaTrophy } from "react-icons/fa";

export default function RankBar({ data, rankBarColor }) {
  let barHeight;
  let trophyColor;
  if (data.rank === 1) {
    barHeight = "h-96 ";
    trophyColor = "text-yellow-500";
  } else if (data.rank === 2) {
    barHeight = "h-80 ";
    trophyColor = "text-gray-400";
  } else {
    barHeight = "h-64 ";
    trophyColor = "text-amber-700";
  }
  return (
    <div className="w-[15%]">
      <div className="flex flex-col justify-center items-center">
        <div className="text-sm font-bold">{data.score}</div>
        <FaTrophy size="35" className={trophyColor} />
      </div>
      <div className={"rounded-lg " + barHeight + rankBarColor}></div>
      <div className="text-lg font-bold">{data.rank}위</div>
      <div className="text-lg">{data.school}</div>
    </div>
  );
}
