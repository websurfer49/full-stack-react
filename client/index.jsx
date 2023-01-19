import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import { RecoilRoot } from "recoil";

const root = createRoot(document.getElementById("root"));

root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
