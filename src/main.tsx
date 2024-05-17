import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "../routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter />
  </React.StrictMode>
);
