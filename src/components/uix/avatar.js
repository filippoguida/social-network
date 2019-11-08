import React from "react";

function Avatar({ first, last, imageurl, onClick, blur }) {
    let url = imageurl || "/public/images/profile-default.png";
    return (
        <React.Fragment>
            {!blur && (
                <img
                    onClick={() => {
                        if (onClick) onClick();
                    }}
                    className="avatar"
                    src={url}
                    alt={`${first}-${last}`}
                />
            )}
            {blur && (
                <img
                    style="filter:blur(8px)"
                    onClick={() => {
                        if (onClick) onClick();
                    }}
                    className="avatar"
                    src={url}
                    alt={`${first}-${last}`}
                />
            )}
        </React.Fragment>
    );
}

export function AvatarHeader(props) {
    return <Avatar {...props} />;
}

export function AvatarProfile(props) {
    return <Avatar {...props} />;
}
