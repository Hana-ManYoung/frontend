import { IoIosArrowForward } from "react-icons/io";

export default function ChallengeCard({ data }) {
  return (
    <div
      className={
        "w-[50%] h-28 px-4 py-4 text-2xl font-basic rounded-lg flex items-center justify-between shadow-md shadow-gray-200 hover:opacity-70 transition-all duration-300 ease-in-out cursor-pointer " +
        data.bg
      }
    >
      <div className="ml-2">
        <div className="flex items-center">
          <h1 className="text-xl">{data.name}</h1>
          <img src={data.url} alt="" className="ml-2 w-5" />
        </div>
        <p className="text-xs text-gray-500">{data.explain}</p>
      </div>
      <div className="flex items-center">
        <div className="text-xl font-bold mr-5">{data.point}</div>
        <IoIosArrowForward size="25" className="text-gray-500" />
      </div>
    </div>
  );
}
