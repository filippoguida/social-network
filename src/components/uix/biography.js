import React, { useState } from "react";

export function Biography({ biography }) {
    return (
        <div>
            <div style={styles.biographyContaienr}>
                <textarea
                    name="biography"
                    rows="10"
                    cols="50"
                    value={biography || ""}
                    readOnly={true}
                />
            </div>
        </div>
    );
}

export function BiographyEditable({ biography, onEdit, onInput }) {
    const [editing, setEditing] = useState(false);
    const toggleEditor = () => setEditing(!editing);
    return (
        <div style={styles.biographyContaienr}>
            <textarea
                name="biography"
                rows="10"
                cols="50"
                value={biography || ""}
                onInput={e => onInput(e)}
                readOnly={!editing}
            />

            {!editing && <button onClick={() => toggleEditor()}>edit</button>}
            {editing && (
                <button
                    onClick={() => {
                        onEdit();
                        toggleEditor();
                    }}
                >
                    save
                </button>
            )}
        </div>
    );
}

const styles = {
    biographyContaienr: {
        display: "flex",
        margin: "50px"
    }
};
