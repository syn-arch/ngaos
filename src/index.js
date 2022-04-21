import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Index from "./router/Index";
import * as serviceWorker from "./serviceWorker";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

serviceWorker.register();
