import React from "react";
import { HashRouter, Route } from "react-router-dom";
import AvatarHeader from "./avatar/avatarheader";
import Profile from "./views/profile";

export default function App() {
    return (
        <div>
            <div style={styles.headerContainer}>
                <img src="public/images/header-logo.png" />
                <AvatarHeader />
            </div>
            <div style={styles.mainContainer}>
                <HashRouter>
                    <div>
                        <Route path="/" component={Profile} />
                    </div>
                </HashRouter>
            </div>
        </div>
    );
}

const styles = {
    headerContainer: {
        display: "flex",
        justifyContent: "space-between"
    },
    mainContainer: {
        display: "flex",
        justifyContent: "center"
    }
};
