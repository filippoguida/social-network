import React from "react";
import Uploader from "./uploader";

function ImageUploadModal({ error, message, upload }) {
    let picture = null;
    return (
        <div>
            {error && (
                <div style={styles.error}>
                    Oops! Something went wrong, please try again.
                </div>
            )}
            <div style={styles.uploadContainer}>
                <h3>{message}</h3>
                <input
                    type="file"
                    accept="image/*"
                    onChange={e => (picture = e.target.files[0])}
                />
                <button onClick={() => upload(picture)}>Upload</button>
            </div>
        </div>
    );
}

export default function ImageUploader({ message, onSubmit, onUpload }) {
    return (
        <Uploader
            action="/profilepicture"
            message={message}
            upload={onSubmit}
            component={ImageUploadModal}
            onUpload={onUpload}
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
