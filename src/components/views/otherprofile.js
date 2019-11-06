import React, { useState } from "react";
import View from "./_view";
import { Main, Header } from "../partials/layouts";
import { AvatarEditorModal } from "../uix/modals";
import { AvatarProfile, AvatarHeader } from "../uix/avatar";
import { Biography } from "../uix/biography";

function OtherProfileView({ first, last, imageurl, otherUser, handleUpload }) {
    let [editAvatar, setEditAvatar] = useState(false);
    let toggleEditAvatar = () => setEditAvatar(!editAvatar);
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
                            <AvatarProfile
                                first={otherUser.first}
                                last={otherUser.last}
                                imageurl={otherUser.imageurl}
                            />
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
    }
};
