import React, { useState, useEffect } from "react";
import View from "./_view";
import { Main, Header } from "../partials/layouts";
import { AvatarEditorModal } from "../uix/modals";
import { AvatarHeader } from "../uix/avatar";
import { useSelector, useDispatch } from "react-redux";
import { getChatMessages } from "../../actions";
import { socket } from "../socket";

function ProfileView({ first, last, imageurl, handleUpload }) {
    let dispatch = useDispatch();
    const chatMessages = useSelector(
        state => state.chatMessages && state.chatMessages
    );
    useEffect(() => {
        dispatch(getChatMessages());
    }, []);

    let [editAvatar, setEditAvatar] = useState(false);
    let toggleEditAvatar = () => setEditAvatar(!editAvatar);
    //socket.emit("ADD_CHAT_MESSAGE", "asdljhbflksdflakjsdblkfjba");
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
            <Main component={<div style={styles.container}></div>} />
            {chatMessages &&
                chatMessages.map((message, key) => (
                    <p key={key}>{message.message}</p>
                ))}
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
