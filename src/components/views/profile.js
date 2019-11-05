import React, { useState } from "react";
import View from "./_view";
import { AvatarEditorModal } from "../uix/modals";
import { AvatarProfile, AvatarHeader } from "../uix/avatar";
import { BiographyEditable } from "../uix/biography";

function ProfileView({
    first,
    last,
    imageurl,
    biography,
    handleInput,
    handleSubmit,
    handleUpload
}) {
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
                <div style={styles.profileContainer}>
                    <AvatarProfile
                        first={first}
                        last={last}
                        imageurl={imageurl}
                        onClick={() => toggleEditAvatar()}
                    />
                    <BiographyEditable
                        biography={biography}
                        onInput={e => handleInput(e)}
                        onEdit={() => handleSubmit("/biography")}
                    />
                </div>
            </div>
            {editAvatar && (
                <AvatarEditorModal
                    onLoad={picture => handleUpload("/profilepicture", picture)}
                />
            )}
        </React.Fragment>
    );
}

export default function Profile() {
    return <View component={ProfileView} />;
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
