import React from "react";

export default function Uploader({ message, uploadMethod }) {
    let picture = null;
    return (
        <div style={styles.uploadContainer}>
            <h3>{message}</h3>
            <input
                type="file"
                accept="image/*"
                onChange={e => (picture = e.target.files[0])}
            />
            <button onClick={() => uploadMethod(picture)}>Upload</button>
        </div>
    );
}

const styles = {
    uploadContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
};
