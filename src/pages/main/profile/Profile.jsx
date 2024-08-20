import { useEffect, useState } from "react";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import LoadingSkeleton from "../../common/LoadingSkeleton";
import { SERVER_URL } from "../../../etc/url";
import axios from "axios";

export default function Profile() {
  const [savingData, setSavingData] = useState({});
  const [hanaMoneyData, setHanaMoneyData] = useState({});
  const [consumeData, setConsumeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getChallenge = async () => {
      setIsLoading(true);
      try {
        const result = await axios.get(SERVER_URL + "challenge.json");
        setSavingData(result.data.data.saving);
        setHanaMoneyData(result.data.data.hanaMoney);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    const getconsumeData = async () => {
      setIsLoading(true);
      try {
        const result = await axios.get(SERVER_URL + "consume.json");
        setConsumeData(result.data.data.consumeData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getChallenge();
    getconsumeData();
  }, []);

  if (isLoading) return <LoadingSkeleton />;

  return (
    <div className="w-[90%] mx-auto flex flex-col animate__animated animate__fadeIn">
      <Section1 />
      <Section2
        savingData={savingData}
        hanaMoneyData={hanaMoneyData}
        consumeData={consumeData}
      />
      <Section3 />
    </div>
  );
}
