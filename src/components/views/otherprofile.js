import React, { useState } from "react";
import View from "./_view";
import { AvatarEditorModal } from "../uix/modals";
import { AvatarProfile, AvatarHeader } from "../uix/avatar";
import { Biography } from "../uix/biography";

function OtherProfileView({ first, last, imageurl, otherUser, handleUpload }) {
    let [editAvatar, setEditAvatar] = useState(false);
    let toggleEditAvatar = () => setEditAvatar(!editAvatar);
    return (
        <React.Fragment>
            <div style={styles.headerContainer}>
                <img src="/public/images/header-logo.png" />
                <AvatarHeader
                    first={first}
                    last={last}
                    imageurl={imageurl}
                    onClick={() => toggleEditAvatar()}
                />
            </div>
            <div style={styles.mainContainer}>
                {otherUser && (
                    <div style={styles.profileContainer}>
                        <AvatarProfile
                            first={otherUser.first}
                            last={otherUser.last}
                            imageurl={otherUser.imageurl}
                        />
                        <Biography biography={otherUser.biography} />
                    </div>
                )}
            </div>
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
    headerContainer: {
        display: "flex",
        justifyContent: "space-between"
    },
    mainContainer: {
        display: "flex",
        justifyContent: "center"
    },
    profileContainer: {
        display: "flex",
        justifyContents: "center",
        alignItems: "center",
        margin: "100px"
    }
};
