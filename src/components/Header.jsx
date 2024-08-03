import { Link } from "react-router-dom";
import { HeaderLogo } from "./Logo";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function Header() {
  return (
    <div className="w-full py-4 bg-emerald-50 border-b-2 border-emerald-700">
      <div className="max-w-[1024px] mx-auto flex items-center justify-between">
        <div className="w-[35%]">
          <HeaderLogo />
        </div>
        <div className="w-[45%] text-xl flex gap-5">
          <MenuBtn name={"가계부"} target={"planner"} />
          <MenuBtn name={"챌린지"} target={"challenge"} />
          <MenuBtn name={"랭킹"} target={"rank"} />
          <MenuBtn name={"채팅"} target={"chat"} />
        </div>
        <Link
          to="/profile"
          className="w-[20%] flex justify-center items-center"
        >
          <p className="mr-2">규은님 안녕하세요!</p>
          <IoPersonCircleOutline size={30} />
        </Link>
      </div>
    </div>
  );
}

function MenuBtn({ name, target }) {
  return (
    <Link to={target} className="w-full">
      <div className="py-2 text-center text-xl text-white btn-hana-green rounded-md cursor-pointer hover:opacity-80 transition-all duration-300 ease-in-out">
        {name}
      </div>
    </Link>
  );
}
