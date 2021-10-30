const express = require('express');

const ingredients = require("../models/ingredients_model");

const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body)
    // need users id from sessions
    ingredients.addIngredient(5, req.body.ingredient).then((s) => {
        res.json({ status: "ok"})
    })
})

router.get('/', (req, res) => {
    ingredients.getIngredients(id).then((response) => {
        res.json(response)
    })
})




module.exports = router;
