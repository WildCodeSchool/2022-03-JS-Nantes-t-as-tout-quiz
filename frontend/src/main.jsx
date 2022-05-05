// eslint-disable-next-line import/no-unresolved
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// eslint-disable-next-line import/no-named-as-default
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
