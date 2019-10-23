import React from "react";
import axios from "./axios";
import { Link } from "react-router-dom";

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange({ target }) {
        this.setState({
            [target.name]: target.value
        });
    }

    submit() {
        let { email, password } = this.state;
        axios
            .post("/login", { email, password })
            .catch(() => this.setState({ error: true }));
    }

    render() {
        return (
            <div style={styles.formContainer}>
                {this.state.error && (
                    <div style={styles.error}>
                        Oops! Something went wrong, please try again.
                    </div>
                )}
                <input
                    style={styles.formElement}
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={e => this.handleChange(e)}
                />
                <input
                    style={styles.formElement}
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={e => this.handleChange(e)}
                />
                <button
                    style={styles.formElement}
                    onClick={() => this.submit()}
                >
                    Login
                </button>
                <div>
                    <p>
                        Not a member? <Link to="/">Log In</Link>
                    </p>
                </div>
            </div>
        );
    }
}

const styles = {
    error: {
        color: "red"
    },
    formContainer: {
        display: "flex",
        flexDirection: "column",
        margin: "60px"
    },
    formElement: {
        margin: "10px"
    }
};
