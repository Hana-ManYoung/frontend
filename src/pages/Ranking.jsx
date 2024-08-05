import { FaRankingStar } from "react-icons/fa6";
import RankBar from "../components/RankBar";
import { useState } from "react";
import {
  rankCategoryInfo,
  rankRegionInfo,
  rankSchoolInfo,
} from "../data/rankInfo";

import { FaCrown } from "react-icons/fa6";
import { FaSchoolFlag } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

import { myRankData } from "../data/myRankData";

export default function Ranking() {
  const [selectedRank, setSelectedRank] = useState(0);

  return (
    <div className="w-[90%] mt-4 mx-auto animate__animated animate__fadeIn">
      <div className="text-3xl font-bold flex">
        <div className="flex items-center">
          <FaRankingStar size="30" className="mr-3 text-emerald-700" />
          <h1>
            랭킹
            <span className="ml-3 text-xs text-gray-400">8월 5일 기준</span>
          </h1>
        </div>
      </div>

      <RankTab selectedRank={selectedRank} />
      <SelectTabBtn
        selectedRank={selectedRank}
        setSelectedRank={setSelectedRank}
      />
      <MyRankTab selectedRank={selectedRank} />
      <TopRankTab selectedRank={selectedRank} />
    </div>
  );
}

function RankTab({ selectedRank }) {
  let rankBarBgColor = [
    "bg-gradient-to-t from-cyan-500 to-teal-300",
    "bg-gradient-to-t from-green-300 to-lime-200",
    "bg-gradient-to-t from-indigo-200 to-fuchsia-200",
  ];
  return (
    <div className="mt-2 text-center font-basic flex justify-evenly items-end gap-10 animate__animated animate__fadeIn">
      {
        [
          <>
            <RankBar
              data={rankSchoolInfo[0]}
              rankBarColor={rankBarBgColor[0]}
            />
            <RankBar
              data={rankSchoolInfo[1]}
              rankBarColor={rankBarBgColor[0]}
            />
            <RankBar
              data={rankSchoolInfo[2]}
              rankBarColor={rankBarBgColor[0]}
            />
          </>,
          <>
            <RankBar
              data={rankRegionInfo[0]}
              rankBarColor={rankBarBgColor[1]}
            />
            <RankBar
              data={rankRegionInfo[1]}
              rankBarColor={rankBarBgColor[1]}
            />
            <RankBar
              data={rankRegionInfo[2]}
              rankBarColor={rankBarBgColor[1]}
            />
          </>,
          <>
            <RankBar
              data={rankCategoryInfo[0]}
              rankBarColor={rankBarBgColor[2]}
            />
            <RankBar
              data={rankCategoryInfo[1]}
              rankBarColor={rankBarBgColor[2]}
            />
            <RankBar
              data={rankCategoryInfo[2]}
              rankBarColor={rankBarBgColor[2]}
            />
          </>,
        ][selectedRank]
      }
    </div>
  );
}
function SelectTabBtn({ selectedRank, setSelectedRank }) {
  return (
    <div className="mt-10 text-gray-400 text-center text-xl font-basic flex justify-center gap-5">
      <div
        className={
          "w-[15%] py-2 rounded-md cursor-pointer hover:bg-cyan-500 hover:text-white transition-all duration-300 " +
          (selectedRank === 0 ? " text-black" : "")
        }
        onClick={() => setSelectedRank(0)}
      >
        학교
      </div>
      <div
        className={
          "w-[15%] py-2 rounded-md cursor-pointer hover:bg-green-400 hover:text-white transition-all duration-300 " +
          (selectedRank === 1 ? "text-black" : "")
        }
        onClick={() => setSelectedRank(1)}
      >
        지역
      </div>
      <div
        className={
          "w-[15%] py-2 rounded-md cursor-pointer hover:bg-indigo-300 hover:text-white transition-all duration-300 " +
          (selectedRank === 2 ? "text-black" : "")
        }
        onClick={() => setSelectedRank(2)}
      >
        소비
      </div>
    </div>
  );
}
function MyRankTab({ selectedRank }) {
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
              {myRankData[2].rank}
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
function TopRankTab({ selectedRank }) {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold flex items-center">
        <FaCrown size="30" className="text-yellow-500 mr-4" /> TOP 5 둘러보기
      </h2>
      <div className="w-full px-6 py-4 mt-2 text-xl font-basic rounded-xl flex justify-between gap-5">
        <div className="w-[50%] flex flex-col gap-5">
          {
            [
              <>
                <RankCard
                  bgColor={"bg-blue-100"}
                  rank={1}
                  title={"당산서중학교"}
                />
                <RankCard
                  bgColor={"bg-red-100"}
                  rank={2}
                  title={"여의도고등학교"}
                />
                <RankCard
                  bgColor={"bg-green-100"}
                  rank={3}
                  title={"선유고등학교"}
                />
              </>,
              <>
                <RankCard
                  bgColor={"bg-blue-100"}
                  rank={1}
                  title={"서울시 영등포구"}
                />
                <RankCard
                  bgColor={"bg-red-100"}
                  rank={2}
                  title={"경기도 수원시"}
                />
                <RankCard
                  bgColor={"bg-green-100"}
                  rank={3}
                  title={"인천시 남동구"}
                />
              </>,
              <>
                <RankCard
                  bgColor={"bg-blue-100"}
                  rank={1}
                  title={"쇼핑/뷰티"}
                />
                <RankCard
                  bgColor={"bg-red-100"}
                  rank={2}
                  title={"편의점/마트"}
                />
                <RankCard
                  bgColor={"bg-green-100"}
                  rank={3}
                  title={"여행/숙박"}
                />
              </>,
            ][selectedRank]
          }
        </div>
        <div className="w-[50%] flex flex-col gap-5">
          {
            [
              <>
                <RankCard
                  bgColor={"bg-slate-200"}
                  rank={4}
                  title={"선유중학교"}
                />
                <RankCard
                  bgColor={"bg-slate-200"}
                  rank={5}
                  title={"관악고등학교"}
                />
                <RankCard
                  bgColor={"bg-yellow-100"}
                  rank={1}
                  title={"우리 학교 (당산서중학교)"}
                />
              </>,
              <>
                <RankCard
                  bgColor={"bg-slate-200"}
                  rank={4}
                  title={"부산시 해운대구"}
                />
                <RankCard
                  bgColor={"bg-slate-200"}
                  rank={5}
                  title={"경기도 김포시"}
                />
                <RankCard
                  bgColor={"bg-yellow-100"}
                  rank={1}
                  title={"우리 지역 (서울시 영등포구)"}
                />
              </>,
              <>
                <RankCard
                  bgColor={"bg-slate-200"}
                  rank={4}
                  title={"문화/여가"}
                />
                <RankCard bgColor={"bg-slate-200"} rank={5} title={"기타"} />
                <RankCard
                  bgColor={"bg-yellow-100"}
                  rank={2}
                  title={"나의 소비 (편의점/마트)"}
                />
              </>,
            ][selectedRank]
          }
        </div>
      </div>
    </div>
  );
}

function RankCard({ bgColor, rank, title }) {
  return (
    <div className={"px-10 py-5 rounded-xl shadow-md " + bgColor}>
      {rank}위 {title}
    </div>
  );
}
