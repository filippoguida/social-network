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
                    `INSERT INTO users (first, last, email, password)
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

module.exports.getUserData = userId => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM users WHERE id = $1`, [userId])
            .then(sqlTab => resolve(sqlTab.rows[0]))
            .catch(err => reject(err));
    });
};

module.exports.getFriendshipStatus = (userId1, userId2) => {
    return new Promise((resolve, reject) => {
        db.query(
            `SELECT * FROM friendships WHERE (receiver_id = $1 AND sender_id = $2) OR (receiver_id = $2 AND sender_id = $1)`,
            [userId1, userId2]
        )
            .then(sqlTab => resolve(sqlTab.rows[0]))
            .catch(err => reject(err));
    });
};

module.exports.getFriendsList = userId => {
    return new Promise((resolve, reject) => {
        db.query(
            `SELECT first, last, imageurl, accepted, friendships.id, users.id AS profileId FROM friendships JOIN users ON (accepted = true AND receiver_id = $1 AND sender_id = users.id) OR (accepted = true AND sender_id = $1 AND receiver_id = users.id)`,
            [userId]
        )
            .then(sqlTab => resolve(sqlTab.rows))
            .catch(err => reject(err));
    });
};

module.exports.getFriendsRequests = userId => {
    return new Promise((resolve, reject) => {
        db.query(
            `SELECT first, last, imageurl, accepted, friendships.id, users.id AS profileId FROM friendships JOIN users ON (accepted = false AND receiver_id = $1 AND sender_id = users.id)`,
            [userId]
        )
            .then(sqlTab => resolve(sqlTab.rows))
            .catch(err => reject(err));
    });
};

module.exports.sendFriendRequest = (senderId, receiverId) => {
    return db.query(
        `INSERT INTO friendships (sender_id, receiver_id) VALUES ($1, $2)`,
        [senderId, receiverId]
    );
};

module.exports.getChatMessages = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT* FROM chat`)
            .then(sqlTab => resolve(sqlTab.rows))
            .catch(err => reject(err));
    });
};

module.exports.addChatMessage = (userId, message) => {
    return db.query(`INSERT INTO chat (sender_id, message) VALUES ($1, $2)`, [
        userId,
        message
    ]);
};

module.exports.acceptFriendRequest = (senderId, receiverId) => {
    return db.query(
        `UPDATE friendships SET accepted = TRUE WHERE (sender_id =$1 AND receiver_id = $2)`,
        [senderId, receiverId]
    );
};

module.exports.endFriendship = (userId1, userId2) => {
    return db.query(
        `DELETE FROM friendships WHERE (receiver_id = $1 AND sender_id = $2) OR (receiver_id = $2 AND sender_id = $1)`,
        [userId1, userId2]
    );
};

module.exports.searchUsers = userquery => {
    return new Promise((resolve, reject) => {
        db.query(
            `SELECT first, last, imageurl, id FROM users
        WHERE (first ILIKE $1 OR last ILIKE $1 OR CONCAT(first, ' ', last) ILIKE $1 OR CONCAT(last, ' ', first) ILIKE $1)
        ORDER BY id DESC LIMIT 6;`,
            [userquery + "%"]
        )
            .then(sqlTab => resolve(sqlTab.rows))
            .catch(err => reject(err));
    });
};

module.exports.updateProfilePicture = (userId, imgUrl) => {
    return db.query(`UPDATE users SET imageurl = $2 WHERE id = $1`, [
        userId,
        imgUrl
    ]);
};

module.exports.updateBio = (userId, biography) => {
    return db.query(`UPDATE users SET biography = $2 WHERE id = $1`, [
        userId,
        biography
    ]);
};
