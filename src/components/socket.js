import * as io from "socket.io-client";
import { getChatMessages, addChatMessage } from "../actions";
export let socket;
export const init = store => {
    if (!socket) {
        socket = io.connect();
        socket.on("GET_CHAT_MESSAGES", messages => {
            store.dispatch(getChatMessages(messages));
        });
        socket.on("ADD_CHAT_MESSAGE", message => {
            store.dispatch(addChatMessage(message));
        });
    }
};
