import "./App.css";
import "animate.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Header from "./components/Header";
import Planner from "./pages/Planner";
import Challenge from "./pages/Challenge";
import Ranking from "./pages/Ranking";
import Diary from "./pages/Diary";
import Register from "./pages/register/Register";
import Logo from "./components/Logo";
import Young from "./pages/register/young/Young";
import Adult from "./pages/register/adult/Adult";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<RegisterOutlet />}>
        <Route path="" element={<Register />} />
        <Route path="young" element={<Young />} />
        <Route path="adult" element={<Adult />} />
      </Route>
      <Route path="/main" element={<PagesOutlet />}>
        <Route path="" element={<Main />} />
        <Route path="profile" element={"프로필입니다"} />
        <Route path="planner" element={<Planner />} />
        <Route path="challenge" element={<Challenge />} />
        <Route path="challenge/diary" element={<Diary />} />
        <Route path="rank" element={<Ranking />} />
        <Route path="chat" element={"채팅입니다"} />
      </Route>
    </Routes>
  );
}

function PagesOutlet() {
  return (
    <>
      <Header />
      <div className="relative h-full min-h-[calc(100vh-78px)] bg-hana">
        <div className="w-full max-w-[1024px] min-h-[calc(100vh-78px)] mx-auto py-6 bg-white shadow-xl flex flex-col">
          <Outlet />
        </div>
      </div>
    </>
  );
}

function RegisterOutlet() {
  return (
    <div className="relative w-screen h-full min-h-screen bg-hana">
      <div className="w-full max-w-[1024px] min-h-screen mx-auto bg-white shadow-xl flex flex-col justify-center items-center">
        <img
          src={process.env.PUBLIC_URL + "/images/ayj/1.png"}
          className="absolute right-0 bottom-0 w-0 md:w-32 lg:w-48"
          alt=""
        />
        <Logo />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
