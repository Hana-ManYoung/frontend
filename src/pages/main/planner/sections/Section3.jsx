import MonthlyLineChart from "../components/MonthlyLineChart";

export default function Section3({ data }) {
  return (
    <div className="w-full mt-10 px-8 py-8 rounded-xl bg-gradient-to-l from-red-100 to-pink-200 shadow-md">
      <h1 className="text-2xl text-black">
        <span className="font-bold">월별 가계부 추이 </span>
        <span className="text-xs">(최근 6개월)</span>
      </h1>
      <div className="relative w-full mt-5 pt-8 pb-4 bg-white rounded-xl flex items-center justify-center">
        <img
          src={process.env.PUBLIC_URL + "/images/hana/monthly.gif"}
          alt=""
          className="absolute w-24 bottom-0 left-5"
        />
        <MonthlyLineChart data={data} />
      </div>
    </div>
  );
}
