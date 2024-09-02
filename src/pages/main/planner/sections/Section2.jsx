import { IoMdSquare } from "react-icons/io";
import ConsumeRowBox from "../../../common/ConsumeRowBox";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../../common/LoadingSpinner";

export default function Section2({ useHistory }) {
  const [isLoading, setIsLoading] = useState(true);
  const [account, setAccount] = useState("");
  const [accountTransactions, setAccountTransactions] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const getProfileInfo = async () => {
      setIsLoading(true);
      try {
        const result = await axios.get(`
            http://localhost:8081/api/profile/${user.user_login_id}`);
        setAccount(result.data.account);
        setAccountTransactions(result.data.accountTransactions);
        console.log(result.data);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };

    getProfileInfo();
  }, []);

  return (
    <div className="w-full mt-10 px-8 py-8 rounded-xl text-gray-500 bg-gradient-to-r from-blue-100 to-lime-100  shadow-md">
      <div className="text-black flex justify-between items-end">
        <h2 className="text-2xl text-gray-600 font-bold">
          이용내역{" "}
          <span className="text-sm text-gray-500">
            오늘의 가계부를 작성해주세요!
          </span>
        </h2>
        <a
          href="/main/challenge"
          className="mr-4 text-xs border-b border-black cursor-pointer"
        >
          가계부 / 소비계획 챌린지
        </a>
      </div>
      <div className="mt-3 flex justify-between items-center">
        <div className="w-[39%] h-60 overflow-y-auto bg-white">
          <div className="w-[90%] py-2 mx-auto font-basic">
            <div className="pt-1 pb-2 border-b-2 flex justify-between items-center">
              <p className="text-xs ">2024.08.04 (금)</p>
              <img
                src={process.env.PUBLIC_URL + "/images/hana/hana_1q.jpg"}
                alt=""
                className="h-5"
              />
            </div>
            {isLoading ? (
              <div className="mt-20">
                <LoadingSpinner />
              </div>
            ) : (
              <ConsumeRowBox accountTransactions={accountTransactions} />
            )}
          </div>
        </div>
        <div className="w-[59%] h-60 font-basic flex flex-col gap-5">
          <div className="bg-white py-5 rounded-xl flex-1 flex">
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <>
                <div className="w-[50%] px-5">
                  <h3>이번달 수입 (서버 수정 필요)</h3>
                  <p className="mt-2 text-2xl text-gray-600 font-bold flex justify-center items-center">
                    {useHistory.income.toLocaleString("ko-KR")}원
                  </p>
                </div>
                <div className="w-[50%] px-5">
                  <h3>잔고</h3>
                  <p className="mt-2 text-2xl font-bold bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-transparent bg-clip-text flex justify-center items-center">
                    <span>{account.acc_balance.toLocaleString("ko-KR")}원</span>
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="bg-white py-5 rounded-xl flex-1 flex">
            <div className="w-[50%] px-5">
              <h3>이번달 소비 (서버 수정 필요)</h3>
              <p className="mt-2 text-2xl text-gray-600 font-bold flex justify-center items-center">
                {useHistory.consume.toLocaleString("ko-KR")}원
              </p>
            </div>
            <div className="w-[50%] px-5">
              <h3>가장 많은 지출 (서버 수정 필요)</h3>
              <p className="mt-3 text-xl flex justify-center items-center">
                <IoMdSquare className="text-orange-500" size="25" />
                {useHistory.most.type}{" "}
                {useHistory.most.amount.toLocaleString("ko-KR")}원
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
