import React from "react";
import axios from "../modules/axios";

export default class Reader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    syncData() {
        return axios.post("/user").then(user => this.setState(user.data));
    }

    async componentDidMount() {
        await this.syncData();
    }

    render() {
        const Component = this.props.component;
        return (
            <Component
                {...this.state}
                syncData={() => this.syncData()}
                error={this.state.error}
            />
        );
    }
}
