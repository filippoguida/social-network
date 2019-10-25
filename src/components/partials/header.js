import React from "react";

export default function Header({ component }) {
    return (
        <div style={styles.headerContainer}>
            <img src="public/images/header-logo.png" />
            {component}
        </div>
    );
}

const styles = {
    headerContainer: {
        display: "flex",
        justifyContent: "space-between"
    }
};
