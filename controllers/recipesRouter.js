const express = require('express');
const axios = require('axios');
const dotenv = require("dotenv");
dotenv.config();

const apiKey = process.env.API_KEY;
console.log(apiKey);

const recipesRouter = express.Router();

recipesRouter.get('/', (req, res) => {

    const example = 'ingredients=apples,+flour,+sugar&number=2';

    const defaultUrl = 'https://api.spoonacular.com/recipes/findByIngredients' + apiKey + example;
    
    // Find instructions: https://api.spoonacular.com/recipes/<id>/information?apiKey=<key>&includeNutrition=false
    
    axios.get(defaultUrl).then((recipesResponse) => {
        console.log(recipesResponse.data);

        res.json(recipesResponse.data);

    
        // recipesResponse.data.forEach(recipe => {
        //     const recipeTitle = document.createElement('h3');
        //     recipeTitle.innerHTML = recipe.title;

        //     recipeTitle.setAttribute('onClick', `getDetails(${recipe.id})`);

        //     mainDiv.append(recipeTitle);

            
            


        // });

    
    });

    
    function getDetails(id) {


    }



})


recipesRouter.get('/details/:id', (req, res) => {
    const id = req.params.id;

    let baseUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=`;
    console.log(baseUrl);


    axios.get(baseUrl).then((recipeInfo) => {
        console.log(recipeInfo.data);
    });
})


module.exports = recipesRouter;