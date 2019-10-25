import React from "react";
import Uploader from "./uploader";
import axios from "./axios";

export default class ProfilePic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        };
    }

    uploadBiography(newBio) {
        return axios.post("/biography", newBio).then(newBio => {
            this.setState({ url: newImgUrl });
            this.setState({ editing: false });
        });
    }

    render() {
        return (
            <div onClick={() => this.setState({ uploading: true })}>
                <img
                    style={styles.profilePicture}
                    src={this.props.url}
                    alt={`${this.props.first} ${this.props.last}`}
                />
                {this.props.uploadEnabled && this.state.uploading && (
                    <Uploader
                        message="Select new profile picture"
                        uploadMethod={newImg => {
                            this.uploadProfilePicture(newImg).then(() =>
                                this.props
                                    .syncData()
                                    .then(() =>
                                        this.setState({ uploading: false })
                                    )
                            );
                        }}
                    />
                )}
            </div>
        );
    }
}

const styles = {
    profilePicture: {
        borderRadius: "50%",
        height: "80px",
        width: "80px",
        objectFit: "cover"
    }
};
