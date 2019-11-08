import React, { useState, useEffect } from "react";
import View from "./_view";
import { Main, Header } from "../partials/layouts";
import { AvatarProfile, AvatarHeader } from "../uix/avatar";
import { Biography } from "../uix/biography";
import { FriendshipButton } from "../uix/buttons";
import { Link } from "react-router-dom";

function OtherProfileView({
    id,
    first,
    last,
    imageurl,
    otherUser,
    handleGet,
    handleSubmit
}) {
    let [friendshipStatus, setFriendshipStatus] = useState();
    useEffect(() => {
        (async function() {
            if (otherUser) {
                let url = "/get-friendship-status/" + otherUser.id;
                let status = await handleGet(url);
                let state;
                if (!status) state = null;
                else {
                    let { sender_id, accepted } = status;
                    if (accepted == true) state = "accepted";
                    if (sender_id == id && accepted == false) state = "sent";
                    if (sender_id == otherUser.id && accepted == false)
                        state = "received";
                }
                setFriendshipStatus(state);
            }
        })();
    }, [otherUser]);

    let handleClick = async () => {
        if (!friendshipStatus) {
            await handleSubmit("/send-friend-request");
            setFriendshipStatus("sent");
        } else if (friendshipStatus == "received") {
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
                    <Link to="/">
                        <AvatarHeader
                            first={first}
                            last={last}
                            imageurl={imageurl}
                        />
                    </Link>
                }
            />
            <Main
                component={
                    otherUser && (
                        <div className="profile">
                            <div>
                                <AvatarProfile
                                    first={otherUser.first}
                                    last={otherUser.last}
                                    imageurl={otherUser.imageurl}
                                />
                            </div>
                            <div>
                                <Biography biography={otherUser.biography} />
                                <FriendshipButton
                                    onClick={() => handleClick()}
                                    friendshipStatus={friendshipStatus}
                                />
                            </div>
                        </div>
                    )
                }
            />
        </React.Fragment>
    );
}

export default function OtherProfile(props) {
    return <View {...props} component={OtherProfileView} />;
}
