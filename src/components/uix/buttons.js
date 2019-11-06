import React from "react";

export function FriendshipButton({ onClick, friendshipStatus }) {
    let text;
    if (!friendshipStatus) text = "Add Friend";
    else if (friendshipStatus == "sent") text = "Cancel Request";
    else if (friendshipStatus == "received") text = "Accept Invitation";
    else if (friendshipStatus == "accepted") text = "Delete Friend";
    return (
        <button
            onClick={() => {
                if (onClick) onClick();
            }}
        >
            {text}
        </button>
    );
}
