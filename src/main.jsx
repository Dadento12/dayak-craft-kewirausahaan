import React from "react";
import ReactDOM from "react-dom/client"; // <--- penting banget
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="overflow-hidden">
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  </div>
);
