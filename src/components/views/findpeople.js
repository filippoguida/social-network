import React, { useState, useEffect } from "react";
import View from "./_view";
import { Main, Header } from "../partials/layouts";
import { AvatarHeader } from "../uix/avatar";
import { Link } from "react-router-dom";

function FindPeopleView({ first, last, imageurl, handleGet }) {
    let [userList, setUserList] = useState(null);
    let [latests, setLatests] = useState(true);

    useEffect(() => {
        (async () => {
            setUserList(await handleGet("/searchusers/ "));
        })();
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
                    <div className="people-container">
                        <img src="/public/images/search.svg" />
                        <div>
                            <input
                                type="text"
                                name="searchusers"
                                onInput={async ({ target }) => {
                                    setUserList(
                                        await handleGet(
                                            "/searchusers/" + target.value
                                        )
                                    );
                                    if (target.value == "") setLatests(true);
                                    else setLatests(false);
                                }}
                            />
                            <div className="people-results">
                                {latests && <h1>Latest Users</h1>}
                                {userList &&
                                    userList.map(user => (
                                        <Link
                                            key={"link" + user.id}
                                            to={"/users/" + user.id}
                                        >
                                            <div key={"div" + user.id}>
                                                <img
                                                    key={"img" + user.id}
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
                }
            />
        </React.Fragment>
    );
}

export default function FindPeople(props) {
    return <View {...props} component={FindPeopleView} />;
}
