import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/vendors/bootstrap/bootstrap.css";
import "./assets/vendors/fontawesome/css/all.css";
import "./assets/vendors/flaticon/flaticon.css";
import "./assets/vendors/animate-css/animate.css";
import "./assets/vendors/owl/assets/owl.carousel.min.css";
import "./assets/vendors/owl/assets/owl.theme.default.min.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
