import React, { useState } from "react";
import Reader from "./_reader";
import AvatarEditor from "../editors/avatareditor";

function AvatarHeaderImg({ first, last, imageurl, error }) {
    let [editing, setEditing] = useState(false);
    let toggleEditing = () => setEditing(!editing);
    let url = imageurl || "public/images/profile-default.png";
    return (
        <div>
            {error && (
                <div style={styles.error}>
                    Oops! Something went wrong, please try again.
                </div>
            )}
            <img
                onClick={toggleEditing}
                style={styles.profilePicture}
                src={url}
                alt={`${first} ${last}`}
            />
            {editing && <AvatarEditor onUpload={toggleEditing} />}
        </div>
    );
}

export default function AvatarHeader() {
    return <Reader component={AvatarHeaderImg} />;
}

const styles = {
    error: {
        color: "red"
    },
    profilePicture: {
        borderRadius: "50%",
        height: "80px",
        width: "80px",
        objectFit: "cover"
    }
};
