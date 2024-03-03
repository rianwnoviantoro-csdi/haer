import React from "react";
import { Route, Routes } from "react-router-dom";
import PersistLogin from "./redux/features/auth/persist-login";
import RequireAuth from "./redux/features/auth/require-auth";
import Prefetch from "./redux/features/auth/prefetch";
import { LayoutComp } from "./components";
import { PrivatePage, PublicPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route index element={<PublicPage.Login />} />
      <Route path="register" element={<PublicPage.Register />} />
      <Route
        path="privacy-policy"
        element={<PrivatePage.Profile.PrivacyPolicy />}
      />
      <Route
        path="term-and-condition"
        element={<PrivatePage.Profile.TermAndCondition />}
      />

      <Route element={<PersistLogin />}>
        <Route element={<RequireAuth />}>
          <Route element={<Prefetch />}>
            <Route path="dashboard" element={<LayoutComp />}>
              <Route index element={<PrivatePage.Home />} />
              <Route path="leave" element={<PrivatePage.Leave />} />
              <Route path="holiday" element={<PrivatePage.Holiday />} />

              <Route path="profile">
                <Route index element={<PrivatePage.Profile.Home />} />
                <Route
                  path="mine"
                  element={<PrivatePage.Profile.MyProfile />}
                />
                <Route
                  path="setting"
                  element={<PrivatePage.Profile.Setting />}
                />
                <Route path="*" element={<PublicPage.NotFound />} />
              </Route>

              <Route path="team" element={<PrivatePage.Team />} />
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
