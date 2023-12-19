import React from "react";
import { Routes, Route } from "react-router-dom";

import PresentationPage from "./pages/PresentationPage";
import Login from "./pages/Login";
import LoggedArea from "./pages/LoggedArea";
import NewReleases from "./pages/LoggedArea/NewRealeses";
import UserTopItems from "./pages/LoggedArea/UserTopItems";

const RoutesApplication = () => {
  return (
    <Routes>
      <Route path="/" element={<PresentationPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logged-area" element={<LoggedArea />}>
        <Route path="user-top-items" element={<UserTopItems />} />
        <Route path="new-releases" element={<NewReleases />} />
      </Route>
    </Routes>
  );
};

export default RoutesApplication;
