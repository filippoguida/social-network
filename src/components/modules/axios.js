import axios from "axios";

var instance = axios.create({
    xsrfCookieName: "socialnetworkToken",
    xsrfHeaderName: "csrf-token"
});

export default instance;
