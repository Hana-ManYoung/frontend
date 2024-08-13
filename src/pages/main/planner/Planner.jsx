import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER_URL } from "../../../etc/url";

import Loading from "../../common/Loading";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";

export default function Planner() {
  const [useHistory, setUseHistory] = useState({
    income: 0,
    remain: 0,
    consume: 0,
    most: { type: "", amount: 0 },
  });
  const [isLoading, setIsLoading] = useState(true);
  const [consumeData, setConsumeData] = useState([]);
  const [consumeChartData, setConsumeChartData] = useState([]);
  const [monthlyChartData, setMonthlyChartData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const getUseHistory = async () => {
        try {
          const result = await axios.get(SERVER_URL + "consume.json");
          setUseHistory(result.data.data);
          setConsumeData(result.data.data.consumeData);
          setConsumeChartData(result.data.data.consumeChartData);
          setMonthlyChartData(result.data.data.monthlyChartData);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      };

      getUseHistory();
    }, [2000]);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="w-[90%] mx-auto">
      <Section1 data={consumeChartData} />
      <Section2 useHistory={useHistory} consumeData={consumeData} />
      <Section3 data={monthlyChartData} />
    </div>
  );
}
