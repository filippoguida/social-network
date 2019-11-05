import React from "react";

export default function AvatarHeader({ first, last, imageurl, onClick }) {
    let url = imageurl || "/public/images/profile-default.png";
    return (
        <div onClick={() => onClick()}>
            <img
                style={styles.profilePicture}
                src={url}
                alt={`${first}-${last}`}
            />
        </div>
    );
}

const styles = {
    profilePicture: {
        borderRadius: "50%",
        height: "80px",
        width: "80px",
        objectFit: "cover"
    }
};
