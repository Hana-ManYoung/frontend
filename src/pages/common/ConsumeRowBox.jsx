import ConsumeRow from "../main/planner/components/ConsumeRow";

export default function ConsumeRowBox({ accountTransactions }) {
  return (
    <div className="h-96 pr-2">
      {accountTransactions.map((data, index) => (
        <ConsumeRow key={index} data={data} />
      ))}
    </div>
  );
}
