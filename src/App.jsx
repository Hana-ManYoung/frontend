import "./App.css";
import "animate.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import Young from "./pages/register/young/Young";
import Adult from "./pages/register/adult/Adult";
import Main from "./pages/main/root/Main";
import Login from "./pages/login/Login";
import Planner from "./pages/main/planner/Planner";
import Logo from "./pages/common/Logo";
import Ranking from "./pages/main/ranking/Ranking";
import Diary from "./pages/main/diary/Diary";
import AyjImg from "./pages/common/AyjImg";
import Challenge from "./pages/main/challenge/Challenge";
import Profile from "./pages/main/profile/Profile";
import Intro from "./pages/login/Intro";
import Footer from "./pages/common/Footer";
import Parent from "./pages/parent/Parent";
import Admin from "./pages/admin/Admin";
import MainHeader from "./pages/common/MainHeader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCookie } from "./js/getCookie";
import axios from "axios";
import { init } from "./redux/user";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getCookie("JWT");
    const handleLogin = async () => {
      if (token) {
        try {
          const result = await axios.post(
            "http://localhost:8080/login/cookie",
            token
          );
          dispatch(init(result.data));
        } catch (error) {
          console.error(error);
        } finally {
        }
      }
      if (user.user_login_id) {
      }
    };
    handleLogin();
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/intro" element={<Intro />} index />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<IntroOutlet />}>
        <Route path="" element={<Register />} />
        <Route path="young" element={<Young />} />
        <Route path="adult" element={<Adult />} />
      </Route>
      <Route path="/" element={<PagesOutlet />}>
        <Route path="" element={<Main />} />
        <Route path="planner" element={<Planner />} />
        <Route path="challenge" element={<Challenge />} />
        <Route path="challenge/diary" element={<Diary />} />
        <Route path="rank" element={<Ranking />} />
        <Route path="chat" element={"채팅입니다"} />
        <Route path="news" element={"뉴스입니다"} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="/parent" element={<Parent />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

function PagesOutlet() {
  return (
    <>
      <MainHeader />
      <div className="relative h-full min-h-[calc(100vh-78px)] bg-gradient-to-b from-red-50 to-emerald-50">
        <div className="w-full max-w-[1024px] min-h-[calc(100vh-78px)] mx-auto pt-6 pb-10 bg-white shadow-xl flex flex-col">
          {/* <AyjImg /> */}
          <Outlet />
        </div>
      </div>
      <div className="relative">
        <Footer color={"text-black"} bgColor={"bg-header"} />
      </div>
    </>
  );
}

function IntroOutlet() {
  return (
    <div className="relative w-screen h-full min-h-screen bg-hana">
      <div className="w-full max-w-[1024px] min-h-screen mx-auto bg-white shadow-xl flex flex-col justify-center items-center">
        <AyjImg />
        <Logo />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
