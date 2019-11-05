import React from "react";
import axios from "../modules/axios";

export default class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        await axios.post("/user").then(user => this.setState(user.data));
        if (this.props.match) {
            if (this.props.match.params.id != this.state.id) {
                let otherUser = await axios.get(
                    "/user/" + this.props.match.params.id
                );
                this.setState({
                    otherUser: otherUser.data
                });
            } else this.props.history.push("/");
        } else return null;
    }

    handleInput({ target }) {
        this.setState({
            [target.name]: target.value
        });
    }

    handleSubmit(action) {
        return axios
            .post(action, { ...this.state })
            .catch(() => this.setState({ error: true }));
    }

    handleUpload(action, file) {
        let form = new FormData();
        form.set("file", file);
        return axios
            .post("/profilepicture", form)
            .then(({ data }) => this.setState(data))
            .catch(() => this.setState({ error: true }));
    }

    render() {
        const Component = this.props.component;
        return (
            <React.Fragment>
                {this.state.error && (
                    <div style={styles.error}>
                        Oops! Something went wrong, please try again.
                    </div>
                )}
                <Component
                    {...this.state}
                    {...this.props}
                    setMainState={change => this.setMainState(change)}
                    handleInput={e => this.handleInput(e)}
                    handleSubmit={action => this.handleSubmit(action)}
                    handleUpload={(action, file) =>
                        this.handleUpload(action, file)
                    }
                    getOtherUserData={id => this.getOtherUserData(id)}
                />
            </React.Fragment>
        );
    }
}

const styles = {
    error: {
        color: "red"
    }
};
