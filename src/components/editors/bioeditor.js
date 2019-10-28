import React from "react";
import Editor from "./_editor";

function BioEditorTextarea({ biography, handleInput, handleSubmit, error }) {
    let editing = null;
    let toggleEditor = () => (editing = !editing);
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
                    readOnly={!editing}
                >
                    {biography}
                </textarea>
                {!editing && <button onClick={toggleEditor()}>edit</button>}
                {editing && <button onClick={handleSubmit()}>save</button>}
            </div>
        </div>
    );
}

export default function BioEditor() {
    return <Editor action="/biography" component={BioEditorTextarea} />;
}

const styles = {
    biographyContaienr: {
        display: "flex"
    }
};
