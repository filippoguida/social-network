import React from "react";

export function FindPeopleBar({ onInput, userList }) {
    console.log(userList);
    return (
        <div>
            <input type="text" name="searchusers" onInput={e => onInput(e)} />
            <ul>
                {userList &&
                    userList.map(user => <li key={user.id}>{user.first}</li>)}
            </ul>
        </div>
    );
}

const styles = {};
