import "./App.css";
import "animate.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./pages/Main";
import Header from "./components/Header";
import Planner from "./pages/Planner";
import Challenge from "./pages/Challenge";
import Ranking from "./pages/Ranking";
import Diary from "./pages/Diary";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
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

export default App;
