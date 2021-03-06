import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { createHashHistory } from "history";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./index.css";

const req = require.context("@/icons/svg", false, /\.svg$/);

req.keys().map(req);
console.log(req.keys().map(req), "req");

const history = createHashHistory();

ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
