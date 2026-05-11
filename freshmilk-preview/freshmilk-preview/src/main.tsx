import React from "react";
import { createRoot } from "react-dom/client";
import FreshmilkPage from "./FreshmilkPage";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FreshmilkPage />
  </React.StrictMode>,
);
