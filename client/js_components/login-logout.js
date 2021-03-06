

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
        
        location.reload();
        
    }).catch(err => {
        message = err.response.data.message
        loginNotSuccessfull = document.createElement("h1")
        loginNotSuccessfull.innerHTML = message
        mainDiv.append(loginNotSuccessfull)
      })
      
})

}

// checks if someone is logged in and displays there name 
function loggInMessage() {
    axios.get('/users').then((res) => {
        loggedIn.innerText = "Logged In As:  " + res.data.message
        
        ingredients()
        
        swap = document.getElementById('login')
        swap.outerHTML = '<li id="login" onClick="logout()">Logout</li>'

        document.getElementById("sign-up").style.display = 'none'
        
     })
     
}


function logout(){
    axios.delete("/users").then((res) => console.log(res.data));
    window.location.reload();
    console.log('logged out')
}