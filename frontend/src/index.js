import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./App";
import CSS from "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to="landing" />} />
        <Route path="/landing" element={<LandingPage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
