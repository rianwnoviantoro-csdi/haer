import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import 'swiper/swiper-bundle.css';
import { register } from 'swiper/element/bundle';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicPage } from "./pages/index.jsx";

register();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />

        <Route path="*" element={<PublicPage.NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
