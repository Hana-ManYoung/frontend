import { useState, useEffect } from "react";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
import {
  getCategoryBgColor,
  getCategoryKor,
} from "../../../../js/getCategoryKor";

export default function ConsumePieChart({ data }) {
  const [dataWithColors, setDataWithColors] = useState([]);

  useEffect(() => {
    const updatedData = data.map((entry) => ({
      ...entry,
      name: getCategoryKor(entry.name), // 카테고리 이름을 한국어로 변환
      fill: getCategoryBgColor(entry.name), // 변환된 카테고리 이름에 맞는 색상 추가
    }));
    setDataWithColors(updatedData);
  }, [data]);

  return (
    <PieChart width={300} height={250}>
      <Pie
        data={dataWithColors}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
      />
      {dataWithColors.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={entry.fill} />
      ))}
      <Tooltip />
    </PieChart>
  );
}
