module.exports.noLogin = (req, res, next) => {
    if (req.session.userId) res.redirect("/");
    else next();
};

module.exports.login = (req, res, next) => {
    if (!req.session.userId) res.redirect("/welcome");
    else next();
};
