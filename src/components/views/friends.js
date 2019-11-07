import React, { useState, useEffect } from "react";
import View from "./_view";
import { Main, Header } from "../partials/layouts";
import { AvatarEditorModal } from "../uix/modals";
import { AvatarHeader } from "../uix/avatar";
import { useSelector, useDispatch } from "react-redux";
import { getFriends, getFriendRequests } from "../../actions";

function ProfileView({ first, last, imageurl, handleUpload }) {
    let dispatch = useDispatch();
    const friends = useSelector(state => state.friends && state.friends);
    const friendRequests = useSelector(
        state => state.friendRequests && state.friendRequests
    );
    useEffect(() => {
        dispatch(getFriends());
        dispatch(getFriendRequests());
    }, []);

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
            <Main component={<div style={styles.container}></div>} />
            {friends && friends.map(f => <p key={f.id}>{f.first}</p>)}
            {friendRequests &&
                friendRequests.map(req => <p key={req.id}>{req.first}</p>)}
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
