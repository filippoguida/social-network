import React from "react";
import axios from "../modules/axios";

export default class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        await axios.post("/user").then(user => this.setState(user.data));
    }

    handleInput({ target }) {
        this.setState({
            [target.name]: target.value
        });
    }

    handleSubmit() {
        return axios
            .post(this.props.action, { ...this.state })
            .catch(() => this.setState({ error: true }));
    }

    handleUpload(file) {
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
                {...this.state}
                error={this.state.error}
                handleInput={e => this.handleInput(e)}
                handleSubmit={e => this.handleSubmit(e)}
                handleUpload={file => this.handleUpload(file)}
            />
        );
    }
}
