import { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RegisterForm from "./pages/RegisterForm";
import SignInPage from "./pages/SignInPage";
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to="landing" />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/get-started" element={<RegisterForm />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
};
