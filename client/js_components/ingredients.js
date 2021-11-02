

console.log("hello ingredients")

// ussers sessions id to use for ingredients DB

function ingredients() {
    const form = document.createElement("form")
    form.innerHTML = `<div class="signup-page">
    <div class="form">
      <form class="register-form">
        <input type="text" name="ingredient" placeholder="Ingredient"/>
        <button type="submit">Add Ingredient</button>
      </form>
      </div>
    </div>`;

    mainDiv.replaceChildren(form)

    axios.get('/ingredients').then((res) => {
      console.log(res.data)
      const ingredientList = document.createElement("div") 
      for (each of res.data) {
        const ingredientItem = document.createElement("p")
        ingredientItem.textContent = each.ingredients

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete"
        deleteButton.setAttribute('onClick', `deleteIngredient(${each.id})`);
        ingredientItem.append(deleteButton)
        
        console.log(ingredientItem)
        ingredientList.append(ingredientItem)

        

        mainDiv.append(ingredientList)

        
      }
    })

    

    form.addEventListener("submit",(event) => {
        event.preventDefault()
        const formData = new FormData(form)
    
        const data = Object.fromEntries(formData.entries())
        axios.post('/ingredients', data).then((res) => {
        ingredients() 
        })

        
    })
}

function deleteIngredient(id) {
  console.log(id)
  axios.delete(`/ingredients/${id}`).then(() => {
    
  })
  ingredients()
}



