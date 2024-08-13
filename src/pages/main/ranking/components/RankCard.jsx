export default function RankCard({ bgColor, rank, name, score }) {
  return (
    <div
      className={
        "px-10 py-5 rounded-xl shadow-md flex justify-between " + bgColor
      }
    >
      <div>
        {rank}위 {name}
      </div>
      <div>{score}</div>
    </div>
  );
}
