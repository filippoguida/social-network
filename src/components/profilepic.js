import React from "react";

export default function ProfilePic({ first, last, url, onClick }) {
    url = url || "/images/profile-default.png";
    return (
        <div onClick={onClick}>
            <img
                style={styles.profilePicture}
                src={url}
                alt={`${first} ${last}`}
            />
        </div>
    );
}

const styles = {
    profilePicture: {
        maxWidth: "100px",
        maxHeight: "100px"
    }
};
