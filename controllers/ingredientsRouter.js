const express = require('express');

const ingredients = require("../models/ingredients_model");

const router = express.Router();

router.post('/', (req, res) => {
    // checks sessions for user id
    userID  =  req.session.userId
    
    ingredients.addIngredient(userID, req.body.ingredient).then((s) => {
        res.json({ status: "ok"})
    })
})

router.get('/', (req, res) => {
    ingredients.getIngredients(id).then((response) => {
        res.json(response)
    })
})




module.exports = router;
