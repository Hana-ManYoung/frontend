import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

export default function MainCard({ name, id, target }) {
  const navigate = useNavigate();
  return (
    <div
      className={
        "md:w-[40%] h-32 mx-4 px-4 py-4 text-2xl text-white bg-slate-400 rounded-xl flex items-end cursor-pointer shadow-md shadow-gray-400 hover:opacity-85 transition-all duration-300 ease-in-out group " +
        (id % 2 === 0 ? "btn-hana-blue" : "btn-hana-green")
        // + "bg-gradient-to-r from-cyan-500 to-teal-300"
      }
      onClick={() => navigate("/main" + target)}
    >
      <div className="flex items-center">
        <p>{name}</p>
        <IoIosArrowForward
          size="25"
          className="ml-1 invisible duration-500 group-hover:visible group-hover:translate-x-2"
        />
      </div>
    </div>
  );
}
