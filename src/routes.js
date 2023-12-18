import React from "react";
import { Routes, Route } from "react-router-dom";

import PresentationPage from "./pages/PresentationPage";
import Login from "./pages/Login";

const RoutesApplication = () => {
  return (
    <Routes>
      <Route path="/" element={<PresentationPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default RoutesApplication;
