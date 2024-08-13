import { FaCrown } from "react-icons/fa6";

import RankCard from "./RankCard";

export default function TopRankTab({
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
