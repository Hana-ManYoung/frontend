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
      <Bar dataKey="쇼핑/뷰티" fill="#fcb2ee" />
      <Bar dataKey="여행/숙박" fill="#fcb2b2" />
      <Bar dataKey="식비" fill="#fce0b2" />
      <Bar dataKey="주거/통신" fill="#d1a6f9" />
      <Bar dataKey="편의점/마트" fill="#b0ddfa" />
      <Bar dataKey="교통/자동차" fill="#a2f59a" />
      <Bar dataKey="카페/디저트" fill="#c3ab82" />
      <Bar dataKey="문화/여가" fill="#f5ee9a" />
      <Bar dataKey="기타" fill="#d8d9d5" />
    </BarChart>
  );
}
