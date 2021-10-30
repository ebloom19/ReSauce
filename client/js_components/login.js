headerNav = document.getElementById("header-nav")
loggedIn = document.createElement('h4')
headerNav.append(loggedIn)

function login() {
    
    const form = document.createElement("form")
    form.innerHTML = `<div class="signup-page">
    <div class="form">
      <form class="register-form">
        <input type="text" name="email" placeholder="email address"/>
        <input type="password" name="password" placeholder="password"/>
        <button type="submit">Login</button>
      </form>
      </div>
    </div>`;

    mainDiv.replaceChildren(form)


form.addEventListener("submit", (event) => {
    event.preventDefault()
    const formData = new FormData(form)
    
    const data = Object.fromEntries(formData.entries())
    
    
    axios.post('/users/login', data).then((res) => {
        message = res.data.message
        loginSuccessfull = document.createElement("h1")
        loginSuccessfull.innerHTML = message 
        mainDiv.append(loginSuccessfull)
        loggedIn.innerHTML = "Logged In as: " + res.data.loggedIn
        

    }).catch(err => {
        message = err.response.data.message
        loginNotSuccessfull = document.createElement("h1")
        loginNotSuccessfull.innerHTML = message
        mainDiv.append(loginNotSuccessfull)
      })
      
})

}