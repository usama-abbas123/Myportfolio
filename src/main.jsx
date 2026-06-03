import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css"; // Make sure this matches your file name (index.css or app.css)
import App from "./App.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
