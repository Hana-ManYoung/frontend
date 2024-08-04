import "./App.css";
import "animate.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./pages/Main";
import Header from "./components/Header";
import Planner from "./pages/Planner";
import Challenge from "./pages/Challenge";

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
        <Route path="rank" element={"랭킹입니다"} />
        <Route path="chat" element={"채팅입니다"} />
      </Route>
    </Routes>
  );
}

function PagesOutlet() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
