const cookieSession = require("cookie-session");
const csurf = require("csurf");
const express = require("express");
const router = express.Router();

const cookieSessionMiddelware = cookieSession({
    secret: `coriander-socialnetwork-filippoguida-secret`,
    maxAge: 1000 * 60 * 60 * 24 * 14 //2 weeks
});
router.use(cookieSessionMiddelware);
router.use(csurf());
router.use(function(req, res, next) {
    res.cookie("socialnetworkToken", req.csrfToken());
    next();
});

module.exports = io => {
    io.use(function(socket, next) {
        cookieSessionMiddelware(socket.request, socket.request.res, next);
    });
    return router;
};
