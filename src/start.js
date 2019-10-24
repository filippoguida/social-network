import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import Welcome from "./components/welcome";

let elem;
const userIsLoggedIn = location.pathname == "/welcome";
if (userIsLoggedIn) {
    elem = <Welcome />;
} else {
    elem = <App />;
}

ReactDOM.render(elem, document.querySelector("main"));
