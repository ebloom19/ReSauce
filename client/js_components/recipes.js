// const ingredients = require('')

// Function output example: 'apples,+flour,+sugar'
// function apiIngredients(ingredients) {
    
// }



function search() {
    console.log(testArray)
    axios.post('/recipes', testArray).then((recipesResponse) => {
        // Info pulled from initial search

        const recipesDiv = document.createElement('div');
        recipesDiv.classList = 'recipesDiv';

        for (recipe in recipesResponse.data) {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList = 'recipeDiv';

            const recipeImage = document.createElement('img');
            recipeImage.classList = 'recipeImage';
            recipeImage.setAttribute('src', recipesResponse.data[recipe].image)
            recipeImage.setAttribute('onClick', `renderMethod(${recipesResponse.data[recipe].id})`);
            recipeDiv.append(recipeImage);

            const recipeTitle = document.createElement('h3');
            recipeTitle.innerText = recipesResponse.data[recipe].title;
            recipeTitle.classList = 'recipeTitleTopLeft';
            recipeDiv.append(recipeTitle);

            const usedIngredients = document.createElement('h5')
            usedIngredients.innerText = 'Used Ingredients: ' + recipesResponse.data[recipe].usedIngredientCount;
            usedIngredients.classList = 'usedIngredientsBottomRight';
            recipeDiv.append(usedIngredients);
            recipesDiv.append(recipeDiv);
        };

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
        recipeDiv.id = 'selectedRecipeDiv';
        

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

        const recipeImageEl = document.createElement('img');
        recipeImageEl.id = 'recipeImage';
        recipeImageEl.src = recipeData[recipeName]["recipeImage"];
        recipeSummaryDiv.append(recipeImageEl);

        const recipeSummaryEl = document.createElement('p');
        recipeSummaryEl.innerHTML = recipeData[recipeName]["recipeSummary"]
        recipeSummaryEl.id = 'recipeSummary';
        recipeSummaryDiv.append(recipeSummaryEl);

        recipeDiv.append(recipeSummaryDiv)
        
        // Creating a numbered list of instructions
        const orderedList = document.createElement('ol');
        orderedList.classList = 'form';
        orderedList.id = 'recipeSteps';

        for (step in recipeData[recipeName]["steps"]) {
            const aStep = steps[step].step;
            const createNewStep = document.createElement('li');
            createNewStep.innerText = aStep;
            createNewStep.id = 'steps';
            orderedList.append(createNewStep)
        }
        recipeDiv.append(orderedList)
        mainDiv.replaceChildren(recipeDiv);

        const recipeIngredientsDiv = document.createElement('div');
        recipeIngredientsDiv.id = 'recipeIngredientsDiv';

        const recipeIngredientsHeading = document.createElement('h3');
        recipeIngredientsHeading.innerText = 'Ingredients:'
        recipeIngredientsHeading.id = 'recipeIngredientsHeading';
        recipeIngredientsDiv.append(recipeIngredientsHeading);

        const ingredientsTable = document.createElement('table');
        ingredientsTable.id = 'ingredientsTable';

        const ingredientsTableTopRow = document.createElement('tr');

        const ingredientsTableName = document.createElement('th');
        ingredientsTableName.innerText = 'Ingredient';
        ingredientsTableTopRow.append(ingredientsTableName);

        const ingredientsTableQty = document.createElement('th');
        ingredientsTableQty.innerText = 'Quantity';
        ingredientsTableTopRow.append(ingredientsTableQty)

        const ingredientsTableMethod = document.createElement('th');
        ingredientsTableMethod.innerText = 'Method';
        ingredientsTableTopRow.append(ingredientsTableMethod);

        ingredientsTable.append(ingredientsTableTopRow);

        const ingredientsObject = recipeData[recipeName]["ingredients"];

        for (ingredient in ingredientsObject) {
            const ingredientsTableRow = document.createElement('tr');

            const name = document.createElement('td');
            name.innerText = ingredientsObject[ingredient]['ingredient'];
            ingredientsTableRow.append(name);

            const qty = document.createElement('td');
            qty.innerText = `${ ingredientsObject[ingredient]['qty']} ${ingredientsObject[ingredient]['unit']}`;
            ingredientsTableRow.append(qty);

            const method = document.createElement('td');
            method.innerText = ingredientsObject[ingredient]['method'];
            ingredientsTableRow.append(method)
            
            ingredientsTable.append(ingredientsTableRow);
        }

        recipeIngredientsDiv.append(ingredientsTable);
        recipeSummaryDiv.append(recipeIngredientsDiv)
    });
}


