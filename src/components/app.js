import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Profile from "./views/profile";

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Profile} />
            </div>
        </BrowserRouter>
    );
}
