import React, { useState } from "react";
import View from "./_view";
import { Main, Header } from "../partials/layouts";
import { AvatarEditorModal } from "../uix/modals";
import { AvatarProfile, AvatarHeader } from "../uix/avatar";
import { BiographyEditable } from "../uix/biography";
import { Link } from "react-router-dom";

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
                    <div className="profile">
                        <div>
                            <AvatarProfile
                                first={first}
                                last={last}
                                imageurl={imageurl}
                                onClick={() => toggleEditAvatar()}
                            />
                        </div>
                        <div>
                            <h1>
                                {first} {last}
                            </h1>
                            <BiographyEditable
                                biography={biography}
                                onInput={e => handleInput(e)}
                                onEdit={() => handleSubmit("/biography")}
                            />
                        </div>
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
