import ConsumeRow from "../main/planner/components/ConsumeRow";

export default function ConsumeRowBox({ consumeData }) {
  return (
    <div className="h-96">
      {consumeData.map((data, index) => (
        <ConsumeRow key={index} data={data} />
      ))}
    </div>
  );
}
