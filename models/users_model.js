const db = require("../database/db");

const users = {
    addUser(name, email, password) {
        return db
    .query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3)", [name, email, password])
    .then((dbRes) => dbRes.rows);
    },

    login(email, password) {
        return db
    .query("SELECT * FROM users WHERE email = $1 AND password = $2", [email, password])
    .then((dbRes) => dbRes.rows);
    }
}

module.exports = users;