import React from "react";
import { Link } from "react-router-dom";

export function Main({ component }) {
    return <div className="main-container">{component}</div>;
}

export function Header({ component }) {
    return (
        <div className="header-container">
            <Link to="/">
                <img className="header-logo" src="/public/images/chat.svg" />
            </Link>
            <div>
                <div className="header-menu">
                    <div>
                        <Link to="/findpeople">
                            <img
                                className="header-menu-icon"
                                src="/public/images/search.svg"
                            />
                        </Link>
                        <Link to="/friends">
                            <img
                                className="header-menu-icon"
                                src="/public/images/friends.svg"
                            />
                        </Link>
                        <Link to="/chat">
                            <img
                                className="header-menu-icon"
                                src="/public/images/chat.svg"
                            />
                        </Link>
                    </div>
                    <div className="header-component">{component}</div>
                </div>
            </div>
        </div>
    );
}
