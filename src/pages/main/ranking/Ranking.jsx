import { FaRankingStar } from "react-icons/fa6";
import { useEffect, useState } from "react";

import { FaCrown } from "react-icons/fa6";
import { FaSchoolFlag } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

import axios from "axios";
import Loading from "../../common/Loading";
import { SERVER_URL } from "../../../etc/url";
import RankBar from "./components/RankBar";

export default function Ranking() {
  const [selectedRank, setSelectedRank] = useState(0);
  const [rankSchoolInfo, setRankSchoolInfo] = useState([]);
  const [rankRegionInfo, setRankRegionInfo] = useState([]);
  const [rankCategoryInfo, setRankCategoryInfo] = useState([]);
  const [myRank, setMyRank] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getRankData = async () => {
      try {
        const result = await axios.get(SERVER_URL + "rank.json");
        setMyRank(result.data.data.myRank);
        setRankCategoryInfo(result.data.data.rankCategoryInfo);
        setRankRegionInfo(result.data.data.rankRegionInfo);
        setRankSchoolInfo(result.data.data.rankSchoolInfo);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getRankData();
  }, []);

  if (isLoading) return <Loading />;

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

      <RankTab
        selectedRank={selectedRank}
        rankSchoolInfo={rankSchoolInfo}
        rankRegionInfo={rankRegionInfo}
        rankCategoryInfo={rankCategoryInfo}
      />
      <SelectTabBtn
        selectedRank={selectedRank}
        setSelectedRank={setSelectedRank}
        rankSchoolInfo={rankSchoolInfo}
        rankRegionInfo={rankRegionInfo}
        rankCategoryInfo={rankCategoryInfo}
      />
      <MyRankTab selectedRank={selectedRank} myRankData={myRank} />
      <TopRankTab
        selectedRank={selectedRank}
        rankSchoolInfo={rankSchoolInfo}
        rankRegionInfo={rankRegionInfo}
        rankCategoryInfo={rankCategoryInfo}
        myRankData={myRank}
      />
    </div>
  );
}

function RankTab({
  selectedRank,
  rankSchoolInfo,
  rankRegionInfo,
  rankCategoryInfo,
}) {
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
              data={rankSchoolInfo[1]}
              rankBarColor={rankBarBgColor[0]}
            />
            <RankBar
              data={rankSchoolInfo[0]}
              rankBarColor={rankBarBgColor[0]}
            />
            <RankBar
              data={rankSchoolInfo[2]}
              rankBarColor={rankBarBgColor[0]}
            />
          </>,
          <>
            <RankBar
              data={rankRegionInfo[1]}
              rankBarColor={rankBarBgColor[1]}
            />
            <RankBar
              data={rankRegionInfo[0]}
              rankBarColor={rankBarBgColor[1]}
            />
            <RankBar
              data={rankRegionInfo[2]}
              rankBarColor={rankBarBgColor[1]}
            />
          </>,
          <>
            <RankBar
              data={rankCategoryInfo[1]}
              rankBarColor={rankBarBgColor[2]}
            />
            <RankBar
              data={rankCategoryInfo[0]}
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
    <div className="mt-4 text-gray-300 text-center text-xl font-basic flex justify-center gap-5">
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
function MyRankTab({ selectedRank, myRankData }) {
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
function TopRankTab({
  selectedRank,
  rankSchoolInfo,
  rankRegionInfo,
  rankCategoryInfo,
  myRankData,
}) {
  return (
    <div className="mt-10">
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
                  rank={rankSchoolInfo[0].rank}
                  name={rankSchoolInfo[0].name}
                  score={rankSchoolInfo[0].score}
                />
                <RankCard
                  bgColor={"bg-red-100"}
                  rank={rankSchoolInfo[1].rank}
                  name={rankSchoolInfo[1].name}
                  score={rankSchoolInfo[1].score}
                />
                <RankCard
                  bgColor={"bg-green-100"}
                  rank={rankSchoolInfo[2].rank}
                  name={rankSchoolInfo[2].name}
                  score={rankSchoolInfo[1].score}
                />
              </>,
              <>
                <RankCard
                  bgColor={"bg-blue-100"}
                  rank={rankRegionInfo[0].rank}
                  name={rankRegionInfo[0].name}
                  score={rankRegionInfo[0].score}
                />
                <RankCard
                  bgColor={"bg-red-100"}
                  rank={rankRegionInfo[1].rank}
                  name={rankRegionInfo[1].name}
                  score={rankRegionInfo[1].score}
                />
                <RankCard
                  bgColor={"bg-green-100"}
                  rank={rankRegionInfo[2].rank}
                  name={rankRegionInfo[2].name}
                  score={rankRegionInfo[2].score}
                />
              </>,
              <>
                <RankCard
                  bgColor={"bg-blue-100"}
                  rank={rankCategoryInfo[0].rank}
                  name={rankCategoryInfo[0].name}
                  score={rankCategoryInfo[0].score}
                />
                <RankCard
                  bgColor={"bg-red-100"}
                  rank={rankCategoryInfo[1].rank}
                  name={rankCategoryInfo[1].name}
                  score={rankCategoryInfo[1].score}
                />
                <RankCard
                  bgColor={"bg-green-100"}
                  rank={rankCategoryInfo[2].rank}
                  name={rankCategoryInfo[2].name}
                  score={rankCategoryInfo[2].score}
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
                  rank={rankSchoolInfo[3].rank}
                  name={rankSchoolInfo[3].name}
                  score={rankSchoolInfo[3].score}
                />
                <RankCard
                  bgColor={"bg-slate-200"}
                  rank={rankSchoolInfo[4].rank}
                  name={rankSchoolInfo[4].name}
                  score={rankSchoolInfo[4].score}
                />
                <RankCard
                  bgColor={"bg-yellow-100"}
                  rank={myRankData[0].rank}
                  name={"우리 학교 (" + myRankData[0].content + ")"}
                  score={myRankData[0].score}
                />
              </>,
              <>
                <RankCard
                  bgColor={"bg-slate-200"}
                  rank={rankRegionInfo[3].rank}
                  name={rankRegionInfo[3].name}
                  score={rankRegionInfo[3].score}
                />
                <RankCard
                  bgColor={"bg-slate-200"}
                  rank={rankRegionInfo[4].rank}
                  name={rankRegionInfo[4].name}
                  score={rankRegionInfo[4].score}
                />
                <RankCard
                  bgColor={"bg-yellow-100"}
                  rank={myRankData[1].rank}
                  name={"우리 지역 (" + myRankData[1].content + ")"}
                  score={myRankData[1].score}
                />
              </>,
              <>
                <RankCard
                  bgColor={"bg-slate-200"}
                  rank={rankCategoryInfo[3].rank}
                  name={rankCategoryInfo[3].name}
                  score={rankCategoryInfo[3].score}
                />
                <RankCard
                  bgColor={"bg-slate-200"}
                  rank={rankCategoryInfo[4].rank}
                  name={rankCategoryInfo[4].name}
                  score={rankCategoryInfo[4].score}
                />
                <RankCard
                  bgColor={"bg-yellow-100"}
                  rank={myRankData[2].rank}
                  name={"나의 소비 (" + myRankData[2].content + ")"}
                  score={myRankData[2].score}
                />
              </>,
            ][selectedRank]
          }
        </div>
      </div>
    </div>
  );
}

function RankCard({ bgColor, rank, name, score }) {
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
