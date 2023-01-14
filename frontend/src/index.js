import React from "react";
import ReactDOM from "react-dom/client";
import CSS from "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RegisterForm from "./pages/RegisterForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to="landing" />} />
        <Route path="/landing" element={<LandingPage/>} />
        <Route path="/get-started" element={<RegisterForm/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
