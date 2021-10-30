console.log("hello world")


function initialize() {

    // setting up fresh img
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
            </ul>`



// this "mainDiv can be called in any JS file that is called in the index.HTML. No need to getEliment"            

}



initialize()




