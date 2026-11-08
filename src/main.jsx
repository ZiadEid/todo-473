import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import MainStore from "./stores/MainStore.jsx";

createRoot(document.getElementById("root")).render(
  <MainStore>
    <App />
  </MainStore>,
);
