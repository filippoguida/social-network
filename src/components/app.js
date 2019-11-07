import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Profile from "./views/profile";
import FindPeople from "./views/findpeople";
import OtherProfile from "./views/otherprofile";
import Friends from "./views/friends";
import Chat from "./views/Chat";

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Profile} />
                <Route exact path="/findpeople" component={FindPeople} />
                <Route exact path="/friends" component={Friends} />
                <Route exact path="/chat" component={Chat} />
                <Route
                    path="/users/:id"
                    render={props => (
                        <OtherProfile
                            key={props.match.url}
                            match={props.match}
                            history={props.history}
                        />
                    )}
                />
            </div>
        </BrowserRouter>
    );
}
