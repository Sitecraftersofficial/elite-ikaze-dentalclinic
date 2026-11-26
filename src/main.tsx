import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { routeComponents } from "./pages";
import "./styles.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("The app root element was not found.");
}

createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App routeComponents={routeComponents} />
    </BrowserRouter>
  </React.StrictMode>,
);
