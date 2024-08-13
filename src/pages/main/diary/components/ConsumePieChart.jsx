import { Cell, Pie, PieChart, Tooltip } from "recharts";

export default function ConsumePieChart({ data }) {
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#FF8042",
    "#FF8042",
    "#FF8042",
  ];
  return (
    <PieChart width={300} height={250}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        fill="#8884d8"
      />
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
      <Tooltip />
    </PieChart>
  );
}
