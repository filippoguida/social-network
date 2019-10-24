import React from "react";
import Header from "./header";
import axios from "./axios";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        axios.post("/user").then(user => this.setState(user.data));
    }

    render() {
        return (
            <Header
                first={this.state.first}
                last={this.state.last}
                profilePicUrl={this.state.imageUrl}
            />
        );
    }
}
