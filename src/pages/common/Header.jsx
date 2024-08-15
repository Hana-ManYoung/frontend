import { Link, useLocation } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";
import { HeaderLogo } from "./Logo";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="w-full py-4 bg-header shadow-lg border-b">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        <div className="w-[35%]">
          <HeaderLogo />
        </div>
        <div className="w-[45%] text-xl flex gap-5">
          <MenuBtn
            name={"가계부"}
            target={"/planner"}
            currentPath={currentPath}
          />
          <MenuBtn
            name={"챌린지"}
            target={"/challenge"}
            currentPath={currentPath}
          />
          <MenuBtn name={"랭킹"} target={"/rank"} currentPath={currentPath} />
          <MenuBtn name={"채팅"} target={"/chat"} currentPath={currentPath} />
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

function MenuBtn({ name, target, currentPath }) {
  const isActive = currentPath === target;

  return (
    <Link to={target} className="w-full">
      <div
        className={`py-2 text-center text-lg text-gray-600 font-bold cursor-pointer transition-colors duration-300 ease-in-out ${
          isActive
            ? "border-b-2 border-emerald-600"
            : "border-b-2 border-transparent hover:border-emerald-600"
        }`}
      >
        {name}
      </div>
    </Link>
  );
}
