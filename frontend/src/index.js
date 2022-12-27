import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./App";
import CSS from "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);
