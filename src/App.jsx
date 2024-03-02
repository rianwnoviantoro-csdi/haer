import React from "react";
import { Route, Routes } from "react-router-dom";
import { PrivatePage, PublicPage } from "./pages";
import { LayoutComp } from "./components";

function App() {
  return (
    <Routes>
      <Route index element={<PublicPage.Login />} />
      <Route path="register" element={<PublicPage.Register />} />

      <Route path="dashboard" element={<LayoutComp />}>
        <Route index element={<PrivatePage.Home />} />

        <Route path="leave" element={<PrivatePage.Leave />} />

        <Route path="holiday" element={<PrivatePage.Holiday />} />

        <Route path="profile">
          <Route index element={<PrivatePage.Profile.Home />} />
          <Route path="mine" element={<PrivatePage.Profile.MyProfile />} />
          <Route
            path="privacy-policy"
            element={<PrivatePage.Profile.PrivacyPolicy />}
          />
          <Route path="setting" element={<PrivatePage.Profile.Setting />} />
          <Route
            path="term-and-condition"
            element={<PrivatePage.Profile.TermAndCondition />}
          />
          <Route path="*" element={<PublicPage.NotFound />} />
        </Route>

        <Route path="team" element={<PrivatePage.Team />} />

        <Route path="*" element={<PublicPage.NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
