import React from "react";
import axios from "../modules/axios";

export default class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    syncData() {
        return axios.post("/user").then(user => {
            this.setState(user.data);
        });
    }

    componentDidMount() {
        this.syncData();
    }

    render() {
        const Component = this.props.component;
        return (
            <Component
                error={this.state.error}
                syncData={() => this.syncData()}
            />
        );
    }
}
