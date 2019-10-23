const compression = require("compression");
const db = require("./modules/db");
const cookies = require("./middelware/cookies");
const auth = require("./middelware/auth");
const express = require("express");
const app = express();

app.use(compression());
app.use(express.static("public"));
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
app.use(express.json());
app.use(cookies);
app.use(auth);

app.get("/welcome", function(req, res) {
    if (req.session.userId) res.redirect("/");
    else res.sendFile(__dirname + "/index.html");
});

app.get("*", function(req, res) {
    if (!req.session.userId) res.redirect("/welcome");
    else res.sendFile(__dirname + "/index.html");
});

app.post("/register", function(req, res) {
    console.log(req.body);
    if (!req.session.userId)
        db.addUser(req.body)
            .then(id => {
                req.session.id = id;
                res.redirect("/");
            })
            .catch(e => console.log(e))
            .catch(() => res.sendStatus(500));
});

app.post("/login", (req, res) => {
    db.getUserId(req.body)
        .then(id => {
            req.session.id = id;
            res.redirect("/");
        })
        .catch(() => res.sendStatus(500));
});

app.listen(8080, function() {
    console.log("I'm listening.");
});
