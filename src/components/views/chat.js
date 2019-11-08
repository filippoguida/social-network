import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { socket } from "../socket";
import View from "./_view";
import { Main, Header } from "../partials/layouts";
import { AvatarHeader } from "../uix/avatar";
import { Link } from "react-router-dom";

function ProfileView({ first, last, imageurl }) {
    const chatRef = useRef();
    const chatMessages = useSelector(
        state => state.chatMessages && state.chatMessages
    );

    useEffect(() => {
        if (chatRef.current) {
            const { scrollHeight: sH, clientHeight: cH } = chatRef.current;
            chatRef.current.scrollTop = sH - cH;
        }
    }, [chatMessages]);

    const keyCheck = e => {
        if (e.key == "Enter") {
            e.preventDefault();
            socket.emit("ADD_CHAT_MESSAGE", e.target.value);
            e.target.value = "";
        }
    };

    if (!chatMessages) {
        return null;
    }

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
                    <div className="main-container">
                        <textarea
                            className="chat-box"
                            placeholder="... send a message"
                            onKeyDown={keyCheck}
                        ></textarea>
                        <div className="chat-container" ref={chatRef}>
                            {chatMessages &&
                                chatMessages.map((message, key) => (
                                    <div
                                        key={"div" + key}
                                        className="chat-message"
                                    >
                                        <Link
                                            key={"link" + key}
                                            to={"/users/" + message.senderid}
                                        >
                                            <img
                                                key={"img" + key}
                                                src={message.imageurl}
                                                alt={
                                                    message.first +
                                                    "-" +
                                                    message.last
                                                }
                                            />
                                        </Link>
                                        <div>
                                            <h4>
                                                {message.first} {message.last}
                                            </h4>
                                            <p>{message.message}</p>
                                        </div>
                                    </div>
                                ))}
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
