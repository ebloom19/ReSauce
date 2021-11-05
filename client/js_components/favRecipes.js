function viewFavourites() {
    const form = document.createElement("div")

    mainDiv.replaceChildren(div)

    axios.get('/favouriteRecipe').then((res) => {
      console.log(res.data)
    //   const ingredientList = document.createElement("div") 
    //   for (each of res.data) {
    //     const ingredientItem = document.createElement("p")
    //     ingredientItem.textContent = each.ingredients

    //     const deleteButton = document.createElement('button');
    //     deleteButton.textContent = "Delete"
    //     deleteButton.setAttribute('onClick', `deleteIngredient(${each.id})`);
    //     ingredientItem.append(deleteButton)
        
    //     console.log(ingredientItem)
    //     ingredientList.append(ingredientItem)

        

    //     mainDiv.append(ingredientList)

        
    //   }
    // })

    

    // form.addEventListener("submit",(event) => {
    //     event.preventDefault()
    //     const formData = new FormData(form)
    
    //     const data = Object.fromEntries(formData.entries())
    //     axios.post('/ingredients', data).then((res) => {
    //         ingredients()

    //     }).catch(err => {
    //         message = err.response.data.message
    //         loginNotSuccessfull = document.createElement("h1")
    //         loginNotSuccessfull.innerHTML = message
    //         mainDiv.append(loginNotSuccessfull)
    //       })
    })
}