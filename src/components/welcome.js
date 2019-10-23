import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Register from "./register";
import Login from "./login";

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={styles.welcomeContainer}>
                <h1>Welcome to</h1>
                <img src="/images/welcome-logo.png" />
                <HashRouter>
                    <div>
                        <Route exact path="/" component={Register} />
                        <Route path="/login" component={Login} />
                    </div>
                </HashRouter>
            </div>
        );
    }
}

const styles = {
    welcomeContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContents: "center",
        alignItems: "center"
    }
};
