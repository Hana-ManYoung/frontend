import { FaRankingStar } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { SERVER_URL } from "../../../etc/url";

import axios from "axios";

import Loading from "../../common/Loading";
import RankTab from "./components/RankTab";
import SelectTabBtn from "./components/SelectTabBtn";
import MyRankTab from "./components/MyRankTab";
import TopRankTab from "./components/TopRankTab";

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
