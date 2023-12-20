import React from "react";
import { Routes, Route } from "react-router-dom";

import PresentationPage from "./pages/PresentationPage";
import Login from "./pages/Login";
import LoggedArea from "./pages/LoggedArea";
import NewReleases from "./pages/LoggedArea/NewRealeses";
import Artists from "./pages/LoggedArea/Artists";
import { SpotifyAuth } from "./components/SpotifyAuth";

const RoutesApplication = () => {
  return (
    <Routes>
      <Route path="/" element={<PresentationPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/auth" element={<SpotifyAuth />} />
      <Route path="/logged-area" element={<LoggedArea />}>
        <Route path="user-top-items" element={<Artists />} />
        <Route path="new-releases" element={<NewReleases />} />
      </Route>
    </Routes>
  );
};

export default RoutesApplication;
