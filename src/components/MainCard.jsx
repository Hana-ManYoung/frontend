import { useNavigate } from "react-router-dom";

export default function MainCard({ name, id, target }) {
  const navigate = useNavigate();
  return (
    <div
      className={
        "md:w-[20%] h-36 mx-4 px-4 py-4 text-2xl text-white bg-slate-400 rounded-xl flex items-end cursor-pointer shadow-md shadow-gray-400 hover:opacity-85 transition-all duration-300 ease-in-out " +
        (id % 2 === 0 ? "btn-hana-blue" : "btn-hana-green")
        // + "bg-gradient-to-r from-cyan-500 to-teal-300"
      }
      onClick={() => navigate("/main" + target)}
    >
      {name}
    </div>
  );
}
