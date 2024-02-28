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
        <Route path="calendar" element={<PrivatePage.Calendar />} />
        <Route path="leave" element={<PrivatePage.Leave />} />
        <Route path="profile" element={<PrivatePage.Profile />} />

        <Route path="*" element={<PublicPage.NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
