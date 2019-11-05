import React from "react";
import { HashRouter, Route } from "react-router-dom";
import View from "./_view";
import Registration from "../forms/registration";
import Login from "../forms/login";

function WelcomeLayout() {
    return (
        <div style={styles.welcomeContainer}>
            <h1>Welcome to</h1>
            <img src="public/images/welcome-logo.png" />
            <HashRouter>
                <div>
                    <Route exact path="/" component={Registration} />
                    <Route path="/login" component={Login} />
                </div>
            </HashRouter>
        </div>
    );
}

export default function Profile() {
    return <View component={WelcomeLayout} />;
}

const styles = {
    welcomeContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContents: "center",
        alignItems: "center"
    }
};
