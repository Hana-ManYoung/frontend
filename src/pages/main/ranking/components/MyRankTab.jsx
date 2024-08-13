import { FaSchoolFlag } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

export default function MyRankTab({ selectedRank, myRankData }) {
  return (
    <div className="w-[full] mt-6 text-2xl font-bold">
      {
        [
          <div className="w-[50%] mx-auto flex justify-evenly items-end">
            <h3 className="flex">
              <FaSchoolFlag className="mr-4 text-cyan-500" size="30" />
              {myRankData[0].title}
            </h3>
            <p className="mr-3 text-3xl">
              {myRankData[0].rank}위
              <span className="ml-3 text-sm text-gray-400">
                {" "}
                {myRankData[0].content}
              </span>
            </p>
          </div>,
          <div className="w-[50%] mx-auto flex justify-evenly items-end">
            <h3 className="flex">
              <FaMapMarkedAlt className="mr-4 text-green-400" size="30" />
              {myRankData[1].title}
            </h3>
            <p className="mr-3 text-3xl">
              {myRankData[1].rank}위
              <span className="ml-3 text-sm text-gray-400">
                {myRankData[1].content}
              </span>
            </p>
          </div>,
          <div className="w-[50%] mx-auto flex justify-evenly items-end">
            <h3 className="flex">
              <FaShoppingCart className="mr-4 text-indigo-300" size="30" />
              {myRankData[2].title}
            </h3>
            <p className="mr-3 text-3xl">
              {myRankData[2].rank}위
              <span className="ml-3 text-sm text-gray-400">
                {myRankData[2].content}
              </span>
            </p>
          </div>,
        ][selectedRank]
      }
    </div>
  );
}
