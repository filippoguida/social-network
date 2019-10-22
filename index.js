const compression = require("compression");
const cookieSessison = require("cookie-session");
const express = require("express");
const app = express();

app.use(compression());
app.use(express.static(__dirname + "/public"));
app.use(
    cookieSessison({
        name: "session",
        keys: ["socialNetwork"],
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    })
);

if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/"
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.get("/welcome", function(req, res) {
    if (req.session.userId) res.redirect("/");
    else res.sendFile(__dirname + "/index.html");
});

app.get("*", function(req, res) {
    if (!req.session.userId) res.redirect("/welcome");
    else res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function() {
    console.log("I'm listening.");
});
