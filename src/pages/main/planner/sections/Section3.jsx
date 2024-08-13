import MonthlyLineChart from "../components/MonthlyLineChart";

export default function Section3({ data }) {
  return (
    <div className="w-full mt-10 px-8 py-8 rounded-xl bg-stone-50 shadow-md">
      <h1 className="text-2xl">
        <span className="font-bold">월별 가계부 추이 </span>
        <span className="text-xs text-gray-400">(최근 6개월)</span>
      </h1>
      <div className="relative w-full mt-5 pt-8 pb-4 bg-white flex items-center justify-center">
        <img
          src={process.env.PUBLIC_URL + "/images/hana/monthly.gif"}
          alt=""
          className="absolute bottom-0 left-0"
        />
        <MonthlyLineChart data={data} />
      </div>
    </div>
  );
}
