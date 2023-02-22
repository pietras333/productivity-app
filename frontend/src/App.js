import { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RegisterForm from "./pages/RegisterForm";
export const App = () => {
  //   useLayoutEffect(() => {
  //     const theme = localStorage.getItem("mode");
  //     console.log("theme ===", theme);
  //     if (theme === "dark") {
  //       return document.documentElement.classList.add("dark");
  //     }
  //     return document.documentElement.classList.remove("dark");
  //   }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to="landing" />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/get-started" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
};
