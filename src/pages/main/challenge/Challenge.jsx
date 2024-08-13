import { useEffect, useState } from "react";

import axios from "axios";
import { SERVER_URL } from "../../../etc/url";

import Loading from "../../common/Loading";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";

export default function Challenge() {
  const [savingData, setSavingData] = useState({});
  const [hanaMoneyData, setHanaMoneyData] = useState({});
  const [challengeInfo, setChallengeInfo] = useState([]);
  const [calendarData, setCalendarData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getChallenge = async () => {
      try {
        const result = await axios.get(SERVER_URL + "challenge.json");
        setSavingData(result.data.data.saving);
        setHanaMoneyData(result.data.data.hanaMoney);
        setChallengeInfo(result.data.data.challengeInfo);
        setCalendarData(result.data.data.calendar);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getChallenge();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="w-[90%] mx-auto flex flex-col animate__animated animate__fadeIn">
      <Section1 savingData={savingData} hanaMoneyData={hanaMoneyData} />
      <Section2 challengeInfo={challengeInfo} />
      <Section3 calendarData={calendarData} />
    </div>
  );
}
