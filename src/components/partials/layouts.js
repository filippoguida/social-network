import React from "react";
import { Link } from "react-router-dom";

export function Main({ component }) {
    return <div style={styles.mainContainer}>{component}</div>;
}

export function Header({ component }) {
    return (
        <div style={styles.headerContainer}>
            <Link style={styles.link} to="/">
                <img src="/public/images/header-logo.png" />
            </Link>
            <div>
                <div style={styles.headerComponent}>
                    <Link style={styles.link} to="/findpeople">
                        Find People
                    </Link>
                    <Link style={styles.link} to="/friends">
                        Friends
                    </Link>
                    <Link style={styles.link} to="/chat">
                        Chat
                    </Link>
                </div>
                <div style={styles.headerComponent}>{component}</div>
            </div>
        </div>
    );
}

const styles = {
    mainContainer: {
        display: "flex",
        justifyContent: "center"
    },
    headerContainer: {
        display: "flex",
        justifyContent: "space-between"
    },
    headerComponent: {
        display: "inline-block",
        marginLeft: "30px",
        verticalAlign: "middle"
    },
    link: {
        margin: "0 10px"
    }
};
