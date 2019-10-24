import React from "react";
import ProfilePic from "./profilepic";
import Uploader from "./uploader";
import axios from "./axios";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uploading: false
        };
    }

    uploadProfilePicture(newImage) {
        let form = new FormData();
        form.set("file", newImage);
        axios.post("/profilepicture", form).then(newImgUrl => {
            this.setState({ imgUrl: newImgUrl });
            this.setState({ uploadingPicture: false });
        });
    }

    render() {
        return (
            <div style={styles.headerContainer}>
                <img src="/images/header-logo.png" />
                <ProfilePic
                    first={this.props.first}
                    last={this.props.last}
                    url={this.props.profilePicUrl}
                    onClick={() => this.setState({ uploading: true })}
                />
                {this.state.uploading && (
                    <Uploader
                        message="Select new profile picture"
                        uploadMethod={newImg =>
                            this.uploadProfilePicture(newImg)
                        }
                    />
                )}
            </div>
        );
    }
}

const styles = {
    headerContainer: {
        display: "flex",
        justifyContent: "space-between"
    }
};
