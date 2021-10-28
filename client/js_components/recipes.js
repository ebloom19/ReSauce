// const ingredients = require('')

// Function output example: 'apples,+flour,+sugar'
// function apiIngredients(ingredients) {
    
// }


function search() {
    axios.get('/recipes').then((recipesResponse) => {
        // Info pulled from initial search

        let returnedRecipes = {};

        for (recipe in recipesResponse.data) {
            const recipeTitle = recipesResponse.data[recipe].title;
            const recipeId = recipesResponse.data[recipe].id;
            returnedRecipes[recipeTitle] = recipeId;
        };

        const recipesDiv = document.createElement('div');
        recipesDiv.class = 'recipesDiv';

        for (const [title, id] of Object.entries(returnedRecipes)) {
            const recipeTitle = document.createElement('h3');
            recipeTitle.innerText = title;
            recipeTitle.class = 'recipeTitle';
            recipeTitle.setAttribute('onClick', `renderMethod(${id})`)
            recipesDiv.append(recipeTitle)
        }

        mainDiv.replaceChildren(recipesDiv);

    });

}

function renderMethod(id) {
    axios.get(`/recipes/details/${id}`).then((methodResults) => {
        console.log(methodResults.data);
        let recipeData = {};

        const recipeName = methodResults.data.title
        const cookTime = methodResults.data.readyInMinutes
        const servingSize = methodResults.data.servings
        const recipeSummary = methodResults.data.summary
        const recipeImage = methodResults.data.image
        const ingredientsData = methodResults.data.extendedIngredients

        recipeData[recipeName] = {
            "cookTime" : cookTime,
            "servingSize" : servingSize,
            "recipeSummary" : recipeSummary,
            "recipeImage" : recipeImage
        }   
        console.log(recipeData)
        


        // const  = document.createElement('ol');
        // orderedList.class = 'method';
        for (ingredient in ingredientsData) {
            const ingredientId = ingredientsData[ingredient].id;
            const ingredientName = ingredientsData[ingredient].name;
            const ingredientMethod = ingredientsData[ingredient].original;
            const ingredientQty = ingredientsData[ingredient].amount;
            const ingredientUnit = ingredientsData[ingredient].unit;
            console.log(ingredientId, ingredientName, ingredientMethod)
            
        }

        // Creating a numbered list of instructions
        const orderedList = document.createElement('ol');
        orderedList.class = 'method';

        const steps = methodResults.data.analyzedInstructions[0].steps
        console.log(steps);

        for (step in steps) {
            const aStep = steps[step].step;
            const createNewStep = document.createElement('li');
            createNewStep.innerText = aStep;
            createNewStep.class = `step${step + 1}`;
            orderedList.append(createNewStep)
        }

        mainDiv.replaceChildren(orderedList);
    });
}


