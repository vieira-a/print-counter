import "./main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppRouter />
    {/* <App /> */}
  </React.StrictMode>
);
