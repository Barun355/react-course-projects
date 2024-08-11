import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UrlProvider from "./context/UrlProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UrlProvider>
      <App />
    </UrlProvider>
  </StrictMode>
);
