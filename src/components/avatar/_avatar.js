import React from "react";
import AvatarEditor from "../editors/avatareditor";
import axios from "../modules/axios";

export default class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        await axios.post("/user").then(user => this.setState(user.data));
    }

    handleClick() {
        if (this.props.action == "edit") {
            let editing = !this.state.editing;
            this.setState({ editing });
        }
    }

    render() {
        const Component = this.props.component;
        return (
            <div>
                <Component
                    error={this.state.error}
                    handleClick={e => this.handleClick(e)}
                />
                {this.state.editing && (
                    <AvatarEditor onUpload={this.props.onEdit} />
                )}
            </div>
        );
    }
}
