import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

export default function ConsumeChart({ data }) {
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
