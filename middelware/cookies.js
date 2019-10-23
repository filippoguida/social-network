const cookieSession = require("cookie-session");
const csurf = require("csurf");
const express = require("express");
const router = express.Router();

router.use(
    cookieSession({
        secret: `coriander-socialnetwork-filippoguida-secret`,
        maxAge: 1000 * 60 * 60 * 24 * 14 //2 weeks
    })
);

router.use(csurf());
router.use(function(req, res, next) {
    res.cookie("socialnetworkToken", req.csrfToken());
    next();
});

module.exports = router;
