import ConsumeChart from "../components/ConsumeChart";

export default function Section1({ data }) {
  return (
    <div className="w-full px-8 py-6 text-gray-500 bg-gradient-to-t from-indigo-100 to-fuchsia-100 rounded-xl shadow-md animate__animated animate__fadeIn">
      <h1 className="text-2xl text-gray-600 font-bold">내 소비 동향</h1>
      <div className="w-full flex items-center">
        <div className="w-[30%] text-center">
          <img
            src={process.env.PUBLIC_URL + "/images/ayj/2.png"}
            width="100%"
            alt=""
          />
          <p className="mt-2 text-lg">간편 소비가 최고!</p>
        </div>
        <div className="w-[70%] px-5 font-basic text-base bg-white flex justify-center items-center rounded-xl">
          <ConsumeChart data={data} />
        </div>
      </div>
    </div>
  );
}
