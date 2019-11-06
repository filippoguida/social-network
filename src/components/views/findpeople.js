import React, { useState } from "react";
import View from "./_view";
import { Main, Header } from "../partials/layouts";
import { AvatarEditorModal } from "../uix/modals";
import { AvatarHeader } from "../uix/avatar";
import { FindPeopleBar } from "../uix/searchbars";

function FindPeopleView({ first, last, imageurl, handleUpload, handleGet }) {
    let [editAvatar, setEditAvatar] = useState(false);
    let toggleEditAvatar = () => setEditAvatar(!editAvatar);
    let [userList, setUserList] = useState(null);
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
                        <FindPeopleBar
                            onInput={async ({ target }) => {
                                setUserList(
                                    await handleGet(
                                        "/searchusers/" + target.value
                                    )
                                );
                            }}
                            userList={userList}
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

export default function FindPeople(props) {
    return <View {...props} component={FindPeopleView} />;
}

const styles = {
    container: {
        display: "flex",
        justifyContents: "center",
        alignItems: "center",
        margin: "100px"
    }
};
