import React, { useState, useEffect } from "react";
import View from "./_view";
import { Main, Header } from "../partials/layouts";
import { AvatarEditorModal } from "../uix/modals";
import { AvatarProfile, AvatarHeader } from "../uix/avatar";
import { Biography } from "../uix/biography";
import { FriendshipButton } from "../uix/buttons";

function OtherProfileView({
    id,
    first,
    last,
    imageurl,
    otherUser,
    handleUpload,
    handleGet,
    handleSubmit
}) {
    let [editAvatar, setEditAvatar] = useState(false);
    let toggleEditAvatar = () => setEditAvatar(!editAvatar);

    let getFriendshipStatus = async () => {
        if (!otherUser) return null;

        let url = "/get-friendship-status/" + otherUser.id;
        let status = await handleGet(url);
        if (!status) return null;

        let { sender_id, accepted } = status;
        if (accepted == true) return "accepted";
        if (sender_id == id && accepted == false) return "sent";
        if (sender_id == id && accepted == true) return "received";
    };

    let [friendshipStatus, setFriendshipStatus] = useState();
    useEffect(() => {
        (async function() {
            let state = await getFriendshipStatus();
            setFriendshipStatus(state);
        })();
    });

    let handleClick = async () => {
        if (!friendshipStatus) {
            await handleSubmit("/send-friend-request");
            setFriendshipStatus("sent");
        } else if (friendshipStatus == "pending") {
            await handleSubmit("/accept-friend-request");
            setFriendshipStatus("accepted");
        } else if (friendshipStatus == "accepted") {
            await handleSubmit("/end-friend-request");
            setFriendshipStatus(null);
        } else if (friendshipStatus == "sent") {
            await handleSubmit("/end-friend-request");
            setFriendshipStatus(null);
        }
    };

    return (
        <React.Fragment>
            <Header
                component={
                    <AvatarHeader
                        first={first}
                        last={last}
                        imageurl={imageurl}
                        onClick={() => toggleEditAvatar()}
                    />
                }
            />
            <Main
                component={
                    otherUser && (
                        <div style={styles.container}>
                            <div style={styles.subContainer}>
                                <AvatarProfile
                                    first={otherUser.first}
                                    last={otherUser.last}
                                    imageurl={otherUser.imageurl}
                                />
                                <FriendshipButton
                                    onClick={() => handleClick()}
                                    friendshipStatus={friendshipStatus}
                                />
                            </div>
                            <Biography biography={otherUser.biography} />
                        </div>
                    )
                }
            />
            {editAvatar && (
                <AvatarEditorModal
                    onLoad={picture => handleUpload("/profilepicture", picture)}
                />
            )}
        </React.Fragment>
    );
}

export default function OtherProfile(props) {
    return <View {...props} component={OtherProfileView} />;
}

const styles = {
    container: {
        display: "flex",
        justifyContents: "center",
        alignItems: "center",
        margin: "100px"
    },
    subContainer: {
        display: "flex",
        justifyContents: "center",
        alignItems: "center",
        margin: "100px",
        flexDirection: "column"
    }
};
