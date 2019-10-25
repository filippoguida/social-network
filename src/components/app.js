import React from "react";
import ProfilePicture from "./profilepicture";
import ImageUploader from "./uploaders/imageuploader";
import Header from "./partials/header";
import axios from "./axios";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.syncData = this.syncData.bind(this);
    }

    syncData() {
        return axios.post("/user").then(user => this.setState(user.data));
    }

    componentDidMount() {
        this.syncData();
    }

    render() {
        return (
            <div>
                <Header
                    component={
                        <ProfilePicture
                            first={this.state.first}
                            last={this.state.last}
                            url={this.state.imageurl}
                            actionComponent={
                                <ImageUploader
                                    message="Select new profile picture"
                                    onUpload={() => this.syncData()}
                                />
                            }
                        />
                    }
                />
            </div>
        );
    }
}

/*
<Profile
    first={this.state.first}
    last={this.state.last}
    profilePic={
        <ProfilePic
            first={this.state.first}
            last={this.state.last}
            url={this.state.imageurl}
        />
    }
    bioEditor={
        <BioEditor bio={this.state.bio} editEnabled="true" />
    }
/>
*/
