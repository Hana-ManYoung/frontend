import RankBar from "./RankBar";

export default function RankTab({
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
