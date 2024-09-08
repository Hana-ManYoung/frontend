import { useSelector } from "react-redux";
import { formatDate } from "../../../../js/formatDate";
import { formatPhoneNumber } from "../../../../js/formatPhoneNumber";
import LoadingSkeleton from "../../../common/LoadingSkeleton";

export default function Section1() {
  const user = useSelector((state) => state.user);
  if (!user.user_login_id) return <LoadingSkeleton />;
  return (
    <div className="mt-4 py-4 bg-gradient-to-t from-emerald-200 to-green-200 shadow-md rounded-xl">
      <div className="ml-4 flex items-center">
        <img
          src={process.env.PUBLIC_URL + "/images/hana/logo.png"}
          alt=""
          className="w-7 h-7"
        />
        <h1 className="ml-2 text-2xl text-gray-600 font-bold">내 정보</h1>
      </div>
      <div className="w-[95%] mx-auto mt-3 px-6 py-4 bg-white font-basic rounded-xl">
        <p className="text-xl font-bold">
          {user.user_name}
          <span className="text-sm">님</span>{" "}
          <span className="ml-2 text-sm text-gray-500 font-normal">
            가입일 {formatDate(user.user_date)}
          </span>
        </p>
        <div className="mt-4 flex justify-between items-end">
          <h2 className="">회원정보</h2>
          <p className="text-xs text-blue-500 cursor-pointer">회원정보 수정</p>
        </div>
        <div className="mt-2 py-3 border-t">
          <div className="w-full flex items-center">
            <p className="w-[10%] text-sm text-gray-400">고객명</p>
            <p className="">{user.user_name}</p>
          </div>
          <div className="w-full flex items-center">
            <p className="w-[10%] text-sm text-gray-400">비밀번호</p>
            <p className="">********</p>
          </div>
          <div className="w-full flex items-center">
            <p className="w-[10%] text-sm text-gray-400">이메일</p>
            <p className="">{user.user_email}</p>
          </div>
          <div className="w-full flex items-center">
            <p className="w-[10%] text-sm text-gray-400">연락처</p>
            <p className="">{formatPhoneNumber(user.user_phone)}</p>
          </div>
        </div>
        <div className="py-3 border-y">
          <div className="w-full flex items-center">
            <p className="w-[10%] text-sm text-gray-400">주소</p>
            <p>{user.user_address}</p>
          </div>
          <div className="w-full flex items-center">
            <p className="w-[10%] text-sm text-gray-400">학교</p>
            <p>{user.user_school}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
