

console.log("hello ingredients")

// ussers sessions id to use for ingredients DB



function ingredients() {
    const form = document.createElement("form")
    form.innerHTML = `<div class="signup-page">
    <div class="form">
      <form class="register-form">
        <input type="text" name="ingredient" placeholder="Ingredient"/>
        <button type="submit">Add Ingredient</button>
        <button type="submit" onClick="search()" id="searchButton">Search</button>
      </form>
      </div>
    </div>`;

    mainDiv.replaceChildren(form)

    axios.get('/ingredients').then((res) => {
        if (res.data.length === 0){
             ingredientsResponse = testArray
        }else{
             ingredientsResponse = res.data
        }
        
      console.log(res.data.length)
      console.log(testArray)
      const ingredientList = document.createElement("div") 
      for (each of ingredientsResponse) {
        const ingredientItem = document.createElement("p")
        ingredientItem.textContent = each.ingredients
        if (res.data.length != 0){
            const deleteButton = document.createElement('button');
            deleteButton.textContent = "Delete"
            deleteButton.setAttribute('onClick', `deleteIngredient(${each.id})`);
            ingredientItem.append(deleteButton)
        }
        
        console.log(ingredientItem)
        ingredientList.append(ingredientItem)

        mainDiv.append(ingredientList)
      }
      if (res.data.length === 0 && testArray.length != 0){
        const clearButton = document.createElement('button');
        clearButton.textContent = "clear All"
        clearButton.setAttribute('onClick', `clearButton()`);
        ingredientList.append(clearButton)
      }
    })

    

    form.addEventListener("submit",(event) => {
        event.preventDefault()
        const formData = new FormData(form)
    
        const data = Object.fromEntries(formData.entries())
        axios.post('/ingredients', data).then((res) => {
            testArray.push({ingredients: res.data.ingredient})
            
            ingredients()

        })//.catch(err => {
        //     message = err.response.data.message
        //     loginNotSuccessfull = document.createElement("h1")
        //     loginNotSuccessfull.innerHTML = message
        //     mainDiv.append(loginNotSuccessfull)
        //   })
    })
}

function deleteIngredient(id) {
  console.log(id)
  axios.delete(`/ingredients/${id}`).then(() => {
    
  })
  ingredients()
}

function clearButton() {
    testArray = []
    ingredients()
}



