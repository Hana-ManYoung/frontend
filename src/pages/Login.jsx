import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

export default function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-screen h-full min-h-screen bg-hana">
        <div className="w-full max-w-[1024px] min-h-screen mx-auto bg-white shadow-xl flex flex-col justify-center items-center">
          <Logo />
          <div className="w-[80%]">
            <h1 className="my-7 text-2xl font-bold">로그인</h1>
            <div className="w-full">
              <form onSubmit={() => {}}>
                <div className="my-5">
                  <h2 className="ml-2">아이디</h2>
                  <input
                    type="text"
                    className="w-full h-16 mt-2 pl-5 text-xl border-2 rounded-2xl border-gray-400"
                    placeholder="아이디 입력"
                  />
                </div>
                <div className="my-5">
                  <h2 className="ml-2">비밀번호</h2>
                  <input
                    type="text"
                    className="w-full h-16 mt-2 pl-5 text-xl border-2 rounded-2xl border-gray-400"
                    placeholder="비밀번호 입력"
                  />
                </div>
                <button
                  type="submit"
                  className="my-5 py-4 text-center text-2xl text-white btn-hana-green rounded-2xl cursor-pointer hover:opacity-85 transition-all duration-300 ease-in-out w-full"
                >
                  로그인
                </button>
              </form>
            </div>
            <div>
              <h2 className="ml-2">아직 회원이 아니라면?</h2>
              <button
                type="submit"
                className="mt-2 py-4 text-center text-2xl text-white btn-hana-blue rounded-2xl cursor-pointer hover:opacity-85 transition-all duration-300 ease-in-out w-full"
                onClick={() => navigate("/register")}
              >
                회원가입
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
