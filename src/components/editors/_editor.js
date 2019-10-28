import React from "react";
import axios from "../axios";

export default class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange({ target }) {
        this.setState({
            [target.name]: target.value
        });
    }

    handleSubmit() {
        axios
            .post(this.props.action, this.state)
            .then(() => location.replace("/"))
            .catch(() => this.setState({ error: true }));
    }

    handleUpload(file) {
        let form = new FormData();
        for (let key in this.state) {
            form.set(key, this.state[key]);
        }
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
                handleChange={e => this.handleChange(e)}
                handleSubmit={e => this.handleSubmit(e)}
                handleUpload={file => this.upload(file)}
            />
        );
    }
}
