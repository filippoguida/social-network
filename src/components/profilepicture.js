import React from "react";

export default class ProfilePicture extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let imgUrl = this.props.url || "public/images/profile-default.png";
        return (
            <div>
                <img
                    style={styles.profilePicture}
                    src={imgUrl}
                    alt={`${this.props.first} ${this.props.last}`}
                />
                {this.state.acting && this.props.actionComponent}
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
