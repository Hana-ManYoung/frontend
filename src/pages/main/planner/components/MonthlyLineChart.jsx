import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function MonthlyLineChart({ data }) {
  return (
    <AreaChart width={700} height={300} data={data}>
      <defs>
        <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#4cb9a3" stopOpacity={2} />
          <stop offset="95%" stopColor="#4cb9a3" stopOpacity={0.2} />
        </linearGradient>
        <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
          <stop offset="20%" stopColor="#ffce83" stopOpacity={2} />
          <stop offset="95%" stopColor="#ffce83" stopOpacity={0.2} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <Legend />
      <Tooltip />
      <CartesianGrid strokeDasharray="3 3" />
      <Area
        type="monotone"
        dataKey="지출"
        stroke="#ffce83"
        fill="url(#colorExpense)" // 그라데이션 ID를 fill에 적용
        strokeWidth={2}
      />
      <Area
        type="monotone"
        dataKey="수입"
        stroke="#4cb9a3"
        fill="url(#colorIncome)" // 그라데이션 ID를 fill에 적용
        strokeWidth={2}
      />
    </AreaChart>
  );
}
