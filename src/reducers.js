export function reducer(state = {}, action) {
    if (action.type == "GET_FRIENDS") {
        return { ...state, friends: action.friends };
    }
    if (action.type == "GET_FRIENDS_REQUESTS") {
        return { ...state, friendRequests: action.friendRequests };
    }
    return state;
}
