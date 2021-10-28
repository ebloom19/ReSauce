const express = require('express');
const axios = require('axios');
const dotenv = require("dotenv");
dotenv.config();

const apiKey = process.env.API_KEY;

const recipesRouter = express.Router();

recipesRouter.get('/', (req, res) => {
    const example = 'ingredients=apples,+flour,+sugar&number=2';
    const defaultUrl = 'https://api.spoonacular.com/recipes/findByIngredients' + '?apiKey=' + apiKey + '&' + example;
    console.log(defaultUrl)
    axios.get(defaultUrl).then((recipesResponse) => {
        res.json(recipesResponse.data);
    });
});

// Find instructions: https://api.spoonacular.com/recipes/<id>/information?apiKey=<key>&includeNutrition=false
recipesRouter.get('/details/:id', (req, res) => {
    const id = req.params.id;

    let baseUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&`;
    console.log(baseUrl)
    axios.get(baseUrl).then((methodResponse) => {
        res.json(methodResponse.data);
    });
})


module.exports = recipesRouter;