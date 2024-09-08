import axios from "axios";
import { useEffect, useState } from "react";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";
import { MAN_YOUNG_URL } from "../../../../etc/url";
import { useSelector } from "react-redux";
import { getCategoryKor } from "../../../../js/getCategoryKor";

export default function ConsumeChart() {
  const user = useSelector((state) => state.user);
  const [consumeChartData, setConsumeChartData] = useState([]);
  useEffect(() => {
    const getConsumeChartData = async () => {
      try {
        const result = await axios.get(
          `${MAN_YOUNG_URL}/user/getConsumeData/${user.user_login_id}`
        );
        setConsumeChartData(transformData(result.data));
      } catch (error) {
        console.error(error);
      }
    };

    getConsumeChartData();
  }, []);

  const transformData = (data) => {
    // 카테고리와 기본 값으로 초기화
    const transformed = {
      name: "내 소비 동향",
      "식비/간식": 0,
      "미용/패션": 0,
      교통비: 0,
      "문화/취미": 0,
      "교육/학습": 0,
      "디지털 콘텐츠/쇼핑": 0,
      "기타/예비/용돈": 0,
    };

    // 데이터 집계
    data.forEach((item) => {
      const categoryName = getCategoryKor(item.diary_item_category);
      if (categoryName) {
        // 금액이 0 이하일 경우 0으로 설정
        const amount = Math.max(0, -item.diary_item_amount);
        transformed[categoryName] += amount;
      }
    });

    return [transformed];
  };

  return (
    <BarChart width={700} height={350} data={consumeChartData}>
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
      <Bar dataKey="식비/간식" fill="#fce0b2" />
      <Bar dataKey="미용/패션" fill="#d1a6f9" />
      <Bar dataKey="교통비" fill="#a2f59a" />
      <Bar dataKey="문화/취미" fill="#f5ee9a" />
      <Bar dataKey="교육/학습" fill="#c3ab82" />
      <Bar dataKey="디지털 콘텐츠/쇼핑" fill="#fcb2ee" />
    </BarChart>
  );
}
