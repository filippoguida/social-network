import React from "react";
import Reader from "./_reader";

function BioEditorUI({ error, biography }) {
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
                    value={biography || ""}
                    readOnly="true"
                />
            </div>
        </div>
    );
}

export default function BioEditor() {
    return <Reader component={BioEditorUI} />;
}

const styles = {
    biographyContaienr: {
        display: "flex",
        margin: "50px"
    }
};
