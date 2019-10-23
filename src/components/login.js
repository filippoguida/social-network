import React from "react";
import AuthForm from "./authform";
import { Link } from "react-router-dom";

function LogInForm({ handleChange, handleSubmit, error }) {
    return (
        <div style={styles.formContainer}>
            {error && (
                <div style={styles.error}>
                    Oops! Something went wrong, please try again.
                </div>
            )}
            <input
                style={styles.formElement}
                type="email"
                name="email"
                placeholder="Email"
                onChange={e => handleChange(e)}
            />
            <input
                style={styles.formElement}
                type="password"
                name="password"
                placeholder="Password"
                onChange={e => handleChange(e)}
            />
            <button style={styles.formElement} onClick={() => handleSubmit()}>
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

export default function LogIn() {
    return <AuthForm aciton="/login" component={LogInForm} />;
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
