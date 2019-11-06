const compression = require("compression");
const db = require("./modules/db");
//const s3 = require("./modules/s3");
const uploader = require("./modules/uploader");
const cookies = require("./middelware/cookies");
const auth = require("./middelware/auth");
const rq = require("./middelware/requirements");
const express = require("express");
const app = express();

app.use(compression());
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
app.use("/public", express.static("public"));
app.use(express.json());
app.use(cookies);
app.use(auth);

//- JSON GET
app.get(["/user", "/user/:userId"], rq.login, (req, res) => {
    let id = req.params.userId || req.session.userId;
    db.getUserData(id)
        .then(userData => {
            if (!userData) res.sendStatus(404);
            else res.json(userData);
        })
        .catch(() => res.json({ error: true }));
});

app.get(["/searchusers/", "/searchusers/:userquery"], rq.login, (req, res) => {
    db.searchUsers(req.params.userquery || "")
        .then(userList => {
            if (!userList) res.sendStatus(404);
            else res.json(userList);
        })
        .catch(e => console.log(e))
        .catch(() => res.json({ error: true }));
});

//- HTML GET
const sendHtml = (req, res) => res.sendFile(__dirname + "/index.html");
app.get("/welcome", rq.noLogin, sendHtml);
app.get("*", rq.login, sendHtml);

//- POST
app.post("/registration", (req, res) => {
    db.addUser(req.body)
        .then(id => {
            req.session.userId = id;
            res.sendStatus(200);
        })
        .catch(() => res.sendStatus(500));
});

app.post("/login", (req, res) => {
    db.getUserId(req.body)
        .then(id => {
            req.session.userId = id;
            res.sendStatus(200);
        })
        .catch(e => {
            console.log(e);
            res.sendStatus(500);
        });
});

app.post("/user", (req, res) => {
    db.getUserData(req.session.userId)
        .then(userData => {
            res.json(userData);
        })
        .catch(() => res.sendStatus(500));
});

app.post("/profilepicture", uploader.single("file"), (req, res) => {
    let { destination, filename } = req.file;
    let imageurl = `${destination.substr(1)}/${filename}`; //remove point
    db.updateProfilePicture(req.session.userId, imageurl)
        .then(() => res.json({ imageurl }))
        .catch(() => res.sendStatus(500));
});

app.post("/biography", (req, res) => {
    let { biography } = req.body;
    db.updateBio(req.session.userId, biography)
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500));
});

app.listen(8080, function() {
    console.log("I'm listening.");
});
