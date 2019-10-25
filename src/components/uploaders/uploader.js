import React from "react";
import axios from "../axios";

export default class Uploader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false
        };
    }

    upload(file) {
        let form = new FormData();
        form.set("file", file);
        return axios
            .post(this.props.action, form)
            .then(() => this.props.onUpload())
            .catch(() => this.setState({ error: true }));
    }

    render() {
        const Component = this.props.component;
        return (
            <Component
                error={this.state.error}
                message={this.props.message}
                upload={file => {
                    this.upload(file);
                }}
            />
        );
    }
}
