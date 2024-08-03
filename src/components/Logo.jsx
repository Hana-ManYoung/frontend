import { Link } from "react-router-dom";
import "../App.css";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <img src="/logo.png" alt="logo" className="w-14" />
      <div className="ml-1 text-hana font-bold flex">
        <p className="mr-3 text-3xl">하나에서 만나 Young</p>
        <p className="flex items-end text-base">하나만영</p>
      </div>
    </Link>
  );
}

export function HeaderLogo() {
  return (
    <Link to="/main" className="flex items-center">
      <img src="/logo.png" alt="logo" className="w-10" />
      <div className="ml-1 text-hana font-bold flex">
        <p className="mr-3 text-2xl">하나에서 만나 Young</p>
        <p className="flex items-end text-sm">하나만영</p>
      </div>
    </Link>
  );
}
