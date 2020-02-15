import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import * as serviceWorker from "./serviceWorker";
import "./styles/tailwind.css";
import ReactGA from "react-ga";

ReactGA.initialize(process.env.GA_TRACKING_ID || "");

document.body.style.backgroundColor = "#f7fafc";

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
