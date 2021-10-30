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

    form.addEventListener("submit",(event) => {
        event.preventDefault()
        const formData = new FormData(form)
    
        const data = Object.fromEntries(formData.entries())
        axios.post('/ingredients', data).then((res) => {
            
        })
    })
}