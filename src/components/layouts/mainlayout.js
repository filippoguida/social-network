import React from "react";

export default function MainLayout({ headerComponent, view }) {
    return (
        <div>
            <div style={styles.headerContainer}>
                <img src="public/images/header-logo.png" />
                {headerComponent}
            </div>
            <div style={styles.mainContainer}>
                <img src="public/images/header-logo.png" />
                {view}
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
