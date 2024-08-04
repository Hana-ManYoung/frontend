import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="w-full mt-10  border-t-2">
      <div className="w-[80%] pt-5 mx-auto flex items-center">
        <div className="w-full flex justify-between ">
          <img
            src="/footer/hana1.png"
            alt=""
            className="w-16 cursor-pointer"
            onClick={() => navigate("")}
          />
          <img
            src="/footer/hana2.png"
            alt=""
            className="w-16 cursor-pointer"
            onClick={() => navigate("")}
          />
          <img
            src="/footer/hana3.png"
            alt=""
            className="w-16 cursor-pointer"
            onClick={() => navigate("")}
          />
          <img
            src="/footer/hana4.png"
            alt=""
            className="w-16 cursor-pointer"
            onClick={() => navigate("")}
          />
          <img
            src="/footer/hana5.png"
            alt=""
            className="w-16 cursor-pointer"
            onClick={() => navigate("")}
          />
          <img
            src="/footer/hana6.png"
            alt=""
            className="w-16 cursor-pointer"
            onClick={() => navigate("")}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}
