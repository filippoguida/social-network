import React from "react";
import Editor from "./_editor";

function AvatarEditorModal({ error, handleUpload }) {
    let picture = null;
    return (
        <div>
            {error && (
                <div style={styles.error}>
                    Oops! Something went wrong, please try again.
                </div>
            )}
            <div style={styles.uploadContainer}>
                <h3>Select new profile image</h3>
                <input
                    type="file"
                    accept="image/*"
                    onChange={e => (picture = e.target.files[0])}
                />
                <button onClick={() => handleUpload(picture)}>Upload</button>
            </div>
        </div>
    );
}

export default function AvatarEditor(props) {
    return (
        <Editor
            {...props}
            action="/profilepicture"
            component={AvatarEditorModal}
        />
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
        zIndex: 1
    }
};
