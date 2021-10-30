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
            "recipeImage" : recipeImage,
            "ingredients": []
        }   

        const steps = methodResults.data.analyzedInstructions[0].steps;
        recipeData[recipeName]["steps"] = methodResults.data.analyzedInstructions[0].steps;
        
        for (ingredient in ingredientsData) {
            const ingredientId = ingredientsData[ingredient].id;
            const ingredientName = ingredientsData[ingredient].name;
            const ingredientMethod = ingredientsData[ingredient].original;
            const ingredientQty = ingredientsData[ingredient].amount;
            const ingredientUnit = ingredientsData[ingredient].unit;
            const ingredientDetails = {
                "id": ingredientId,
                "ingredient": ingredientName,
                "method": ingredientMethod,
                "qty": ingredientQty,
                "unit": ingredientUnit
            };
            (recipeData[recipeName]["ingredients"]).push(ingredientDetails)
        }

        // Recipe info div
        const recipeDiv = document.createElement('div');
        recipeDiv.classList = 'form';
        recipeDiv.id = 'recipeDiv';
        

        // DOM for recipe details
        const recipeSummaryDiv = document.createElement('div');
        recipeSummary.classList = 'form';
        
        const recipeTitleEl = document.createElement('h2');
        recipeTitleEl.innerText = Object.keys(recipeData)[0];
        recipeSummaryDiv.append(recipeTitleEl);

        const cookTimeEl = document.createElement('p')
        cookTimeEl.innerText = 'Cook Time: ' + recipeData[recipeName]["cookTime"] + ' minutes';
        cookTimeEl.id = 'quantity';
        recipeSummaryDiv.append(cookTimeEl);

        const servings = document.createElement('p');
        servings.innerText = 'Serving Size: ' + recipeData[recipeName]["servingSize"];
        servings.id = 'servings';
        recipeSummaryDiv.append(servings);

        const recipeSummaryEl = document.createElement('p');
        recipeSummaryEl.innerHTML = recipeData[recipeName]["recipeSummary"]
        recipeSummaryEl.id = 'recipeSummary';
        recipeSummaryDiv.append(recipeSummaryEl);


        recipeDiv.append(recipeSummaryDiv)
        

        // Creating a numbered list of instructions
        const orderedList = document.createElement('ol');
        orderedList.classList = 'form';
        orderedList.id = 'recipeSteps';


        console.log(recipeData);

        for (step in recipeData[recipeName]["steps"]) {
            const aStep = steps[step].step;
            const createNewStep = document.createElement('li');
            createNewStep.innerText = aStep;
            createNewStep.id = 'steps';
            orderedList.append(createNewStep)
        }
        recipeDiv.append(orderedList)

        mainDiv.replaceChildren(recipeDiv);
    });
}


