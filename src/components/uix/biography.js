import React, { useState } from "react";

export function Biography({ biography }) {
    return (
        <div className="biography">
            <textarea
                name="biography"
                value={biography || ""}
                readOnly={true}
            />
        </div>
    );
}

export function BiographyEditable({ biography, onEdit, onInput }) {
    const [editing, setEditing] = useState(false);
    const [className, setClassName] = useState("biography");
    const toggleEditor = () => {
        if (editing) {
            setClassName("biography");
            onEdit();
        } else {
            setClassName("biography-editing");
        }
        setEditing(!editing);
    };
    return (
        <div className={className}>
            <textarea
                name="biography"
                rows="15"
                cols="50"
                value={biography || ""}
                onInput={e => onInput(e)}
                readOnly={!editing}
            />
            {!editing && (
                <img
                    src="/public/images/edit.svg"
                    alt="edit-button"
                    onClick={() => toggleEditor()}
                />
            )}
            {editing && (
                <img
                    src="/public/images/lock.svg"
                    alt="lock-button"
                    onClick={() => toggleEditor()}
                />
            )}
        </div>
    );
}
