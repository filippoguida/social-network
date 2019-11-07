export function reducer(state = {}, action) {
    if (action.type == "GET_FRIENDS") {
        return { ...state, friends: action.friends };
    }
    if (action.type == "GET_FRIENDS_REQUESTS") {
        return { ...state, friendRequests: action.friendRequests };
    }
    if (action.type == "GET_CHAT_MESSAGES") {
        return { ...state, chatMessages: action.chatMessages };
    }
    if (action.type == "ADD_CHAT_MESSAGE") {
        return {
            ...state,
            chatMessages: [...state.chatMessages, action.message]
        };
    }
    return state;
}
