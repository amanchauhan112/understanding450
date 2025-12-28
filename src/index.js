import React from "react";
import { createRoot } from "react-dom/client"; // Correct React 19 import
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container); // Initialize the root

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
