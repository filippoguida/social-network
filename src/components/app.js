import React from "react";
import { HashRouter, Route } from "react-router-dom";
import MainLayout from "./layouts/mainlayout";
import AvatarHeader from "../avatar/avatarheader";
import Welcome from "../views/welcome";
import Profile from "../views/profile";

export default function App() {
    return (
        <MainLayout
            headerComponent={AvatarHeader}
            view={
                <HashRouter>
                    <div>
                        <Route exact path="/" component={Welcome} />
                        <Route path="/profile" component={Profile} />
                    </div>
                </HashRouter>
            }
        />
    );
}
