import React from "react";
import Register from "./register";

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
                <Register />
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
