import React from "react";

function Avatar({ first, last, imageurl, onClick, style }) {
    let url = imageurl || "/public/images/profile-default.png";
    return (
        <div
            onClick={() => {
                if (onClick) onClick();
            }}
        >
            <img style={style} src={url} alt={`${first}-${last}`} />
        </div>
    );
}

export function AvatarHeader(props) {
    return <Avatar {...props} style={styles.avatarHeader} />;
}

export function AvatarProfile(props) {
    return <Avatar {...props} style={styles.avatarProfile} />;
}

const styles = {
    avatarHeader: {
        borderRadius: "50%",
        height: "80px",
        width: "80px",
        objectFit: "cover"
    },
    avatarProfile: {
        borderRadius: "5px",
        height: "300px",
        width: "300px",
        objectFit: "cover"
    }
};
