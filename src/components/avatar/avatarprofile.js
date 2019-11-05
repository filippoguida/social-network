import React from "react";
import Avatar from "./_avatar";

function AvatarProfileImg({ first, last, url, handleClick, error }) {
    let imgUrl = url || "public/images/profile-default.png";
    return (
        <div onClick={handleClick}>
            {error && (
                <div style={styles.error}>
                    Oops! Something went wrong, please try again.
                </div>
            )}
            <img
                style={styles.profilePicture}
                src={imgUrl}
                alt={`${first} ${last}`}
            />
        </div>
    );
}

export default function AvatarProfile() {
    return <Avatar component={AvatarProfileImg} />;
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
