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

