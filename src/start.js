import React from "react";
import ReactDOM from "react-dom";

import Welcome from "./components/welcome";

let elem;
const userIsNotLoggedIn = location.pathname == "/welcome";
if (userIsNotLoggedIn) {
    elem = <Welcome />;
} else {
    elem = <img src="logo.png" />;
}

ReactDOM.render(elem, document.querySelector("main"));
