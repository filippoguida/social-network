import React, { useEffect } from "react";
import View from "./_view";
import { Main, Header } from "../partials/layouts";
import { AvatarHeader } from "../uix/avatar";
import { useSelector, useDispatch } from "react-redux";
import { getFriends, getFriendRequests } from "../../actions";
import { Link } from "react-router-dom";

function ProfileView({ first, last, imageurl }) {
    let dispatch = useDispatch();
    const friends = useSelector(state => state.friends && state.friends);
    const friendRequests = useSelector(
        state => state.friendRequests && state.friendRequests
    );
    useEffect(() => {
        dispatch(getFriends());
        dispatch(getFriendRequests());
    }, []);

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
                    <div className="friends-container">
                        <div>
                            <div className="people-results">
                                <h4>Friends</h4>
                                <br></br>
                                {friends &&
                                    friends.map(user => (
                                        <Link
                                            key={"link" + user.profileid}
                                            to={"/users/" + user.profileid}
                                        >
                                            <div key={"div" + user.profileid}>
                                                <img
                                                    key={"img" + user.profileid}
                                                    src={user.imageurl}
                                                    alt={
                                                        user.first +
                                                        "-" +
                                                        user.last
                                                    }
                                                />
                                                <h4>
                                                    {user.first} {user.last}
                                                </h4>
                                            </div>
                                        </Link>
                                    ))}
                            </div>
                            <div>
                                <div className="people-results">
                                    <h4>Friend Requests</h4>
                                    {friendRequests &&
                                        friendRequests.map(user => (
                                            <Link
                                                key={"link" + user.profileid}
                                                to={"/users/" + user.profileid}
                                            >
                                                <div
                                                    key={"div" + user.profileid}
                                                >
                                                    <img
                                                        key={
                                                            "img" +
                                                            user.profileid
                                                        }
                                                        src={user.imageurl}
                                                        alt={
                                                            user.first +
                                                            "-" +
                                                            user.last
                                                        }
                                                    />
                                                    <h4>
                                                        {user.first} {user.last}
                                                    </h4>
                                                </div>
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                }
            />
        </React.Fragment>
    );
}

export default function Profile(props) {
    return <View {...props} component={ProfileView} />;
}
