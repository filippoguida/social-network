const spicedPg = require("spiced-pg");
const crypt = require("./crypt");
const db = spicedPg(
    process.env.DATABASE_URL ||
        `postgres:postgres:postgres@localhost:5432/socialnetwork`
);

module.exports.addUser = body => {
    return new Promise((resolve, reject) => {
        let { first, last, email, password } = body;
        crypt
            .hash(password)
            .then(hash => {
                db.query(
                    `INSERT INTO users (first_name, last_name, email, password)
                    VALUES ($1, $2, $3, $4) RETURNING id`,
                    [first, last, email, hash]
                )
                    .then(sqlTab => resolve(sqlTab.rows[0].id))
                    .catch(err => reject(err));
            })
            .catch(err => reject(err));
    });
};

module.exports.getUserId = body => {
    return new Promise((resolve, reject) => {
        let { email, password } = body;
        db.query(`SELECT password FROM users WHERE email = $1`, [email])
            .then(sqlTab => {
                let hash = sqlTab.rows[0].password;
                crypt.compare(password, hash).then(logRes => {
                    if (!logRes) reject("Permission Denied");
                    else
                        db.query(
                            `SELECT id FROM users WHERE email = $1 AND password = $2`,
                            [email, hash]
                        )
                            .then(sqlTab => resolve(sqlTab.rows[0].id))
                            .catch(err => reject(err));
                });
            })
            .catch(err => reject(err));
    });
};
