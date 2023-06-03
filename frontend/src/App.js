import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthorizationTest from "./pages/AuthorizationTest";
import HomePage from "./pages/HomePage";
import Board from "./pages/Board";
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route exact path="/" element={<Navigate to="home" />} />
        <Route path="/main" element={<AuthorizationTest />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
};
