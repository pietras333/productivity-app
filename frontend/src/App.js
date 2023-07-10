import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthorizationTest from "./pages/AuthorizationTest";
import HomePage from "./pages/HomePage";
import Board from "./pages/Board";
import Register from "./pages/Register";
import Login from "./pages/Login";
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route exact path="/" element={<Navigate to="home" />} />
        <Route path="/main" element={<AuthorizationTest />} />
        <Route path="/board" element={<Board />} />
        <Route path="/get-started" element={<Register />} />
        <Route path="/sign-in" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
