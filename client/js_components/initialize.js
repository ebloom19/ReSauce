console.log("hello world")

header()

headerNav = document.getElementById("header-nav")
loggedIn = document.createElement('h4')
headerNav.append(loggedIn)

const mainDiv = document.createElement("div")
mainDiv.setAttribute("id", "main_div")
document.body.append(mainDiv)
    // setting up fresh imgaa
const fresh = document.createElement("img")
fresh.setAttribute('src', '/images/freshness.png');
fresh.setAttribute('alt', 'freshness');
fresh.setAttribute('id', 'freshness');
document.body.append(fresh)


// setting up the logo
const logo = document.createElement("h1")
logo.innerText = "ReSauce"
logo.setAttribute("id", "logo")
document.body.append(logo)

// setting up the header-nav
const header = document.createElement("header")
header.setAttribute("id", "header-nav")
document.body.append(header)
header.innerHTML = `
            <ul>
                <li onClick="home()">Home</li>
                <li onClick="ingredients()">Ingredients</li>
                <li onClick="signUp()">Sign-Up</li>
                <li id="login" onClick="login()">Login</li>
                <li id="search_bar"><input id="bar" type="text" placeholder="Find recipes"></li>
                <li id="search" onClick="search()">Search:</li>
                // if session 
                // <li id="favourites" onClick="favourites()">Favourites:</li>
            </ul>`

// checks if someone is logged in and displays there name 
function loggInMessage() {
    axios.get('/users').then((res) => {
        loggedIn.innerHTML = "Logged In As:  " + res.data.message
     })

}

loggInMessage()

// home if not logged in and ingredients page if and when logged in
if (loggedIn.innerHTML === "") {
    home()
}else{
    ingredients()
}






