import React from "react";
import { Route, Routes } from "react-router-dom";
import { PrivatePage, PublicPage } from "./pages";
import { LayoutComp } from "./components";

function App() {
  return (
    <Routes>
      <Route index element={<PublicPage.Login />} />

      <Route path="dashboard" element={<LayoutComp />}>
        <Route index element={<PrivatePage.Home />} />
        <Route path="leave" element={<PrivatePage.Leave />} />
        <Route path="holiday" element={<PrivatePage.Holiday />} />
        <Route path="profile" element={<PrivatePage.Profile />} />
        <Route path="team" element={<PrivatePage.Team />} />

        <Route path="*" element={<PublicPage.NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
