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
      <Bar dataKey="식비/간식" fill="#fce0b2" />
      <Bar dataKey="미용/패션" fill="#d1a6f9" />
      <Bar dataKey="교통비" fill="#a2f59a" />
      <Bar dataKey="문화/취미" fill="#f5ee9a" />
      <Bar dataKey="교육/학습" fill="#c3ab82" />
      <Bar dataKey="디지털 콘텐츠/쇼핑" fill="#fcb2ee" />
      <Bar dataKey="기타/예비" fill="#d8d9d5" />
    </BarChart>
  );
}
