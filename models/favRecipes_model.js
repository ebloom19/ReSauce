const db = require("../database/db");

const favRecipes = {
    addRecipe(id, favRecipe, title, img) {
        return db
            .query("INSERT INTO favRecipes (users_id, recipe_id, title, img) VALUES ($1, $2)", [id, favRecipe, title, img])
            .then((dbRes) => dbRes.rows);
    },

    getRecipe(id) {
        return db
            .query("SELECT * FROM favRecipes")
            .then((dbRes) => dbRes.rows);
    },

    deleteIngredients(id) {
        return db
            .query("DELETE FROM favRecipes WHERE id = $1", [id])
            .then((dbRes) => dbRes.rows);
    }


}




module.exports = favRecipes;