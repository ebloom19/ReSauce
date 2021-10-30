const db = require("../database/db");

const ingredients = {
    addIngredient(id, ingredient) {
        return db
    .query("INSERT INTO ingredients (users_id, ingredients) VALUES ($1, $2)", [id, ingredient])
    .then((dbRes) => dbRes.rows);
    },

    getIngredients(id) {
        return db
    .query("SELECT * FROM ingredients WHERE users_id = $1", [id])
    .then((dbRes) => dbRes.rows);
    }


}




module.exports = ingredients;