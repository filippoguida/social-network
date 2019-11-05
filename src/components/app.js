import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Profile from "./views/profile";
import OtherProfile from "./views/otherprofile";

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Profile} />
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
