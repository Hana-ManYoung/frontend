import { IoIosArrowForward } from "react-icons/io";
export default function HanaAccount() {
  return (
    <div className="w-[50%]">
      <div class="h-20 mt-4 pl-6 pr-4 py-3 text-gray-600 font-basic bg-gradient-to-r from-green-200 to-red-100 rounded-xl cursor-pointer shadow-md shadow-gray-200 hover:opacity-80 transition-all duration-300 ease-in-out flex justify-between items-center group">
        <div className="flex items-center">
          <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
            <img
              src={process.env.PUBLIC_URL + "/images/hana/logo.png"}
              alt=""
              className="p-1"
            />
          </div>
          <div>
            <p className="ml-2 text-lg">영하나 플러스 통장</p>
            <p className="ml-2 text-xs">110525688581</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-5 text-xl">{(10000).toLocaleString("ko-KR")}P</div>
          <IoIosArrowForward
            size="25"
            className="mr-1 duration-300 group-hover:translate-x-2"
          />
        </div>
      </div>
    </div>
  );
}
