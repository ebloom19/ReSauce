const db = require("../database/db");

const users = {
    addUser(name, email, password) {
        return db
    .query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3)", [name, email, password])
    .then((dbRes) => dbRes.rows);
    },

    login(email) {
        return db
    .query("SELECT * FROM users WHERE email = $1", [email])
    .then((dbRes) => dbRes.rows);
    }
}

module.exports = users;