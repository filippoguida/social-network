import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./components/views/welcome";
import App from "./components/app";

let elem;
const userIsLoggedIn = location.pathname == "/welcome";
if (userIsLoggedIn) {
    elem = <Welcome />;
} else {
    elem = <App />;
}

ReactDOM.render(elem, document.querySelector("main"));
