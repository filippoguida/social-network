import axios from "./components/modules/axios";

export async function getFriends() {
    let friends = await axios.get("/friends-list");
    return {
        type: "GET_FRIENDS",
        friends: friends.data
    };
}

export async function getFriendRequests() {
    let requests = await axios.get("/friend-requests-list");
    return {
        type: "GET_FRIENDS_REQUESTS",
        friendRequests: requests.data
    };
}

export async function getChatMessages(messages) {
    return {
        type: "GET_CHAT_MESSAGES",
        chatMessages: messages
    };
}

export async function addChatMessage(message) {
    return {
        type: "ADD_CHAT_MESSAGE",
        message: message
    };
}
