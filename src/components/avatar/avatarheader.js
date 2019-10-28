import React from "react";
import Avatar from "./_avatar";

function AvatarHeaderImg({ first, last, url, handleClick, error }) {
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

export default function AvatarHeader() {
    return <Avatar component={AvatarHeaderImg} />;
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
