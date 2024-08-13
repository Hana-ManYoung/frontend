import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

export default function MonthlyLineChart({ data }) {
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
