// const ingredients = require('')
const dotenv = require("dotenv");
dotenv.config();

// Function output example: 'apples,+flour,+sugar'
function apiIngredients(ingredients) {
    
}

const apiKey = '?apiKey=' + process.env.SPOONACULAR_API_KEY + '&';

const defaultUrl = 'https://api.spoonacular.com/recipes/findByIngredients?' + apiKey

//ingredients=apples,+flour,+sugar&number=2

// ?apiKey=YOUR-API-KEY

function search() {
    const example = 'https://api.spoonacular.com/recipes/findByIngredients?apiKey=2500f68ee0d44f449f41d6fa08f90c3f&ingredients=apples,+flour,+sugar&number=2';
    axios.get(example).then((recipesResponse)=> {
        console.log(recipesResponse);
    
        mainDiv.innerHTML = recipesResponse.data;
    
    
        // challengeResponse.data.forEach(challenge => {
           
        // });
    
    });
}
