import React, { useState } from "react";
import Reader from "./_reader";
import AvatarEditor from "../editors/avatareditor";

function AvatarProfileImg({ first, last, imageurl, error }) {
    let [editing, setEditing] = useState(false);
    let toggleEditing = () => setEditing(!editing);
    let url = imageurl || "public/images/profile-default.png";
    return (
        <div onClick={toggleEditing}>
            {error && (
                <div style={styles.error}>
                    Oops! Something went wrong, please try again.
                </div>
            )}
            <img
                style={styles.profilePicture}
                src={url}
                alt={`${first} ${last}`}
            />
            {editing && <AvatarEditor onUpload={toggleEditing} />}
        </div>
    );
}

export default function AvatarProfile() {
    return <Reader component={AvatarProfileImg} />;
}

const styles = {
    error: {
        color: "red"
    },
    profilePicture: {
        borderRadius: "5px",
        height: "300px",
        width: "300px",
        objectFit: "cover"
    }
};
