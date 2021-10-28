

function signUp() {
    console.log("hello")
    const form = document.createElement("form")
    form.innerHTML = `<div class="signup-page">
    <div class="form">
      <form class="register-form">
        <input type="text" name="name" placeholder="name"/>
        <input type="text" name="email" placeholder="email address"/>
        <input type="password" name="password" placeholder="password"/>
        <button type="submit">Sign UP</button>
      </form>
      </div>
    </div>`;

    mainDiv.replaceChildren(form)


form.addEventListener("submit", (event) => {
    event.preventDefault()
    const formData = new FormData(form)
    
    const data = Object.fromEntries(formData.entries())
    login()
    axios.post('/users', data).then(() => {
        
    })
      
})

}