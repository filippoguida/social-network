import React from "react";
import { Link } from "react-router-dom";

export function Main({ component }) {
    return <div style={styles.mainContainer}>{component}</div>;
}

export function Header({ component }) {
    return (
        <div style={styles.headerContainer}>
            <img src="/public/images/header-logo.png" />
            <div>
                <div style={styles.headerComponent}>
                    <Link to="/findpeople">+ find people</Link>
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
    }
};
