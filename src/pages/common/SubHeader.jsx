import { Link } from "react-router-dom";
import { HeaderLogo } from "./Logo";

export default function SubHeader({ type, color }) {
  return (
    <div className="w-full py-4 bg-white border-b fixed z-10">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <div className="w-[35%]">
          <HeaderLogo type={type} color={color} />
        </div>
        <Link to="/profile" className="w-[20%] flex justify-right items-center">
          <p className="w-full text-right">장규은님</p>
        </Link>
      </div>
    </div>
  );
}
