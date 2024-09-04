import { useEffect, useState } from "react";
import axios from "axios";
import { BANK_CARD_URL, MAN_YOUNG_URL, SERVER_URL } from "../../../etc/url";

import Loading from "../../common/Loading";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import { useSelector } from "react-redux";

export default function Challenge() {
  const [savingData, setSavingData] = useState({});
  const [challengeInfo, setChallengeInfo] = useState([]);
  const [calendarData, setCalendarData] = useState({});
  const [todayChallenge, setTodayChallenge] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [challengeAccount, setChallengeAccount] = useState({});
  const [accountChallengeTransactions, setAccountChallengeTransactions] =
    useState([]);
  const [savingAccount, setSavingAccount] = useState({});

  const user = useSelector((state) => state.user);

  useEffect(() => {
    const getChallengeData = async () => {
      try {
        // 모든 요청을 Promise.all로 묶어서 동시에 실행
        const [tempResult, challengeResult, profileResult] = await Promise.all([
          axios.get(SERVER_URL + "challenge.json"),
          axios.get(
            `${MAN_YOUNG_URL}/challenge/get/total/${user.user_login_id}`
          ),
          axios.get(`http://localhost:8081/api/profile/${user.user_login_id}`),
        ]);

        // 데이터 설정
        setSavingData(tempResult.data.data.saving);
        setChallengeInfo(challengeResult.data.challengeInfo);
        setCalendarData(challengeResult.data.calendarData);
        setTodayChallenge(challengeResult.data.todayChallenge);

        setChallengeAccount(profileResult.data.accountList[2]);
        setAccountChallengeTransactions(
          profileResult.data.accountChallengeTransactions
        );
        setSavingAccount(profileResult.data.accountList[1]);
        console.log(profileResult.data.accountList[1]);
      } catch (error) {
        console.error(error);
      } finally {
        // 모든 요청이 완료된 후 로딩 상태 해제
        setIsLoading(false);
      }
    };

    getChallengeData();
  }, [user.user_login_id]);

  if (isLoading) return <Loading />;

  return (
    <div className="w-[90%] mx-auto flex flex-col animate__animated animate__fadeIn">
      <Section1
        savingData={savingData}
        challengeAccount={challengeAccount}
        accountChallengeTransactions={accountChallengeTransactions}
      />
      <Section2 challengeInfo={challengeInfo} todayChallenge={todayChallenge} />
      <Section3 calendarData={calendarData} />
    </div>
  );
}
