import {
  Bar,
  BarChart,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ConsumeRow from "../components/ConsumeRow";
import { IoMdSquare } from "react-icons/io";
import axios from "axios";
import { SERVER_URL } from "../etc/url";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

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
    }, [3000]);
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

function Section1({ data }) {
  return (
    <div className="w-full px-8 py-6 bg-stone-50 rounded-xl shadow-md animate__animated animate__fadeIn">
      <h1 className="text-2xl font-bold">내 소비 동향</h1>
      <div className="w-full flex items-center">
        <div className="w-[30%] text-center">
          <img
            src={process.env.PUBLIC_URL + "/images/ayj/2.png"}
            width="100%"
            alt=""
          />
          <p className="mt-2 text-lg">간편 소비가 최고!</p>
        </div>
        <div className="w-[70%] px-5 font-basic text-base bg-white flex justify-center items-center">
          <ConsumeChart data={data} />
        </div>
      </div>
    </div>
  );
}

function Section2({ useHistory, consumeData }) {
  return (
    <div className="w-full mt-10 px-8 py-8 rounded-xl bg-stone-50 shadow-md">
      <div className="flex justify-between items-end">
        <h2 className="text-2xl font-bold">
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
      <div className="mt-2 flex justify-between items-center">
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
            {consumeData.map((data, index) => (
              <ConsumeRow key={index} data={data} />
            ))}
          </div>
        </div>
        <div className="w-[59%] h-60 font-basic flex flex-col gap-5">
          <div className="bg-white py-5 flex-1 flex">
            <div className="w-[50%] px-5">
              <h3>이번달 수입</h3>
              <p className="mt-2 text-2xl font-bold text-hana flex justify-center items-center">
                {useHistory.income.toLocaleString("ko-KR")}원
              </p>
            </div>
            <div className="w-[50%] px-5">
              <h3>잔고</h3>
              <p className="mt-2 text-2xl font-bold bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-transparent bg-clip-text flex justify-center items-center">
                {useHistory.remain.toLocaleString("ko-KR")}원
              </p>
            </div>
          </div>
          <div className="bg-white py-5 flex-1 flex">
            <div className="w-[50%] px-5">
              <h3>이번달 소비</h3>
              <p className="mt-2 text-2xl font-bold text-orange-500 flex justify-center items-center">
                {useHistory.consume.toLocaleString("ko-KR")}원
              </p>
            </div>
            <div className="w-[50%] px-5">
              <h3>가장 많은 지출</h3>
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

function Section3({ data }) {
  return (
    <div className="w-full mt-10 px-8 py-8 rounded-xl bg-stone-50 shadow-md">
      <h1 className="text-2xl">
        <span className="font-bold">월별 가계부 추이 </span>
        <span className="text-xs text-gray-400">(최근 6개월)</span>
      </h1>
      <div className="relative w-full mt-5 pt-8 pb-4 bg-white flex items-center justify-center">
        <img
          src={process.env.PUBLIC_URL + "/images/hana/monthly.gif"}
          alt=""
          className="absolute bottom-0 left-0"
        />
        <MonthlyLineChart data={data} />
      </div>
    </div>
  );
}

function ConsumeChart({ data }) {
  return (
    <BarChart width={700} height={350} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip
        position={{ x: 525, y: -25 }}
        wrapperStyle={{ fontSize: "0.9rem" }}
      />
      <Legend
        width={400}
        wrapperStyle={{ fontSize: "0.8rem", left: "125px", bottom: "22.5px" }}
        iconType="square"
      />
      <Bar dataKey="쇼핑/뷰티" fill="#FF5894" />
      <Bar dataKey="여행/숙박" fill="#FF2525" />
      <Bar dataKey="식비" fill="#F57F29" />
      <Bar dataKey="주거/통신" fill="#BE308E" />
      <Bar dataKey="편의점/마트" fill="#63ECFF" />
      <Bar dataKey="교통/자동차" fill="#17B945" />
      <Bar dataKey="카페/디저트" fill="#93501F" />
      <Bar dataKey="문화/여가" fill="#3E5BC1" />
      <Bar dataKey="기타" fill="#AAAAAA" />
    </BarChart>
  );
}

function MonthlyLineChart({ data }) {
  return (
    <LineChart width={700} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Legend />
      <Tooltip />
      <Line type="monotone" dataKey="수입" stroke="#679378" strokeWidth={2.5} />
      <Line type="monotone" dataKey="지출" stroke="#f97316" strokeWidth={2.5} />
    </LineChart>
  );
}
