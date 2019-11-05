import React from "react";

export function AvatarEditorModal({ onLoad }) {
    let picture = null;
    return (
        <div style={styles.uploadContainer}>
            <h3>Select new profile image</h3>
            <input
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
        top: "10%",
        left: "50%",
        zIndex: 10
    }
};
