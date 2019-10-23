import React from "react";
import AuthForm from "./authform";
import { Link } from "react-router-dom";

function RegistrationForm({ handleChange, handleSubmit, error }) {
    return (
        <div style={styles.formContainer}>
            {error && (
                <div style={styles.error}>
                    Oops! Something went wrong, please try again.
                </div>
            )}
            <input
                style={styles.formElement}
                type="text"
                name="first"
                placeholder="First Name"
                onChange={e => handleChange(e)}
            />
            <input
                style={styles.formElement}
                type="text"
                name="last"
                placeholder="Last Name"
                onChange={e => handleChange(e)}
            />

            <input
                style={styles.formElement}
                type="email"
                name="email"
                placeholder="Email"
            />
            <input
                style={styles.formElement}
                type="password"
                name="password"
                placeholder="Password"
                onChange={e => handleChange(e)}
            />
            <button style={styles.formElement} onClick={() => handleSubmit()}>
                Register
            </button>
            <div>
                <p>
                    Already a member? <Link to="/login">Log In</Link>
                </p>
            </div>
        </div>
    );
}

export default function Registration() {
    return <AuthForm aciton="/registration" component={RegistrationForm} />;
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
