import React from "react";
import axios from "axios";

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
        let { first, last } = this.state;
        axios
            .post("/register", { first, last })
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
                    type="text"
                    name="first"
                    placeholder="First Name"
                    onChange={e => this.handleChange(e)}
                />
                <input
                    style={styles.formElement}
                    type="text"
                    name="last"
                    placeholder="Last Name"
                    onChange={e => this.handleChange(e)}
                />

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
                    Register
                </button>
                <div>
                    <p>
                        Already a member? <a href="#">Log In</a>
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
