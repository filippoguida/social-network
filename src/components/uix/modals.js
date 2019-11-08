import React from "react";

export function AvatarEditorModal({ onLoad }) {
    let picture = null;
    return (
        <div style={styles.uploadContainer}>
            <h3>Select new profile image</h3>
            <input
                style={{ margin: "20px" }}
                type="file"
                accept="image/*"
                onChange={e => (picture = e.target.files[0])}
            />
            <button onClick={() => onLoad(picture)}>Upload</button>
        </div>
    );
}

const styles = {
    uploadContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "30%",
        left: "30%",
        height: "30vh",
        width: "50vw",
        background: "#f7fff7",
        border: "5px solid #010101",
        zIndex: 10
    }
};
