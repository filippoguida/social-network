import React, { useState } from "react";
import View from "./_view";
import { Main, Header } from "../partials/layouts";
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
                    <div style={styles.container}>
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

export default function Profile(props) {
    return <View {...props} component={ProfileView} />;
}

const styles = {
    container: {
        display: "flex",
        justifyContents: "center",
        alignItems: "center",
        margin: "100px"
    }
};
