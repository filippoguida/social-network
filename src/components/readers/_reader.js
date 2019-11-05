import React from "react";
import axios from "../modules/axios";

export default class Reader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        await axios.post("/user").then(user => this.setState(user.data));
    }

    render() {
        const Component = this.props.component;
        return <Component {...this.state} error={this.state.error} />;
    }
}
