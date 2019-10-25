import React from "react";
import axios from "../axios";

export default class AuthForm extends React.Component {
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

    render() {
        const Component = this.props.component;
        return (
            <Component
                error={this.state.error}
                handleChange={e => this.handleChange(e)}
                handleSubmit={e => this.handleSubmit(e)}
            />
        );
    }
}
