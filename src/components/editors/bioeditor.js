import React, { useState } from "react";
import Editor from "./_editor";

function BioEditorUI({ error, handleInput, handleSubmit, biography }) {
    const [editing, setEditing] = useState(false);
    const toggleEditor = () => setEditing(!editing);
    return (
        <div>
            {error && (
                <div style={styles.error}>
                    Oops! Something went wrong, please try again.
                </div>
            )}
            <div style={styles.biographyContaienr}>
                <textarea
                    name="biography"
                    rows="10"
                    cols="50"
                    onInput={e => handleInput(e)}
                    value={biography || ""}
                    readOnly={!editing}
                />
                {!editing && (
                    <button onClick={() => toggleEditor()}>edit</button>
                )}
                {editing && (
                    <button onClick={() => handleSubmit().then(toggleEditor)}>
                        save
                    </button>
                )}
            </div>
        </div>
    );
}

export default function BioEditor(props) {
    return <Editor {...props} action="/biography" component={BioEditorUI} />;
}

const styles = {
    biographyContaienr: {
        display: "flex",
        margin: "50px"
    }
};
