console.log("hello world")

header()

const headerNav = document.getElementById("header-nav")
const loggedIn = document.createElement('h4')
headerNav.append(loggedIn)

const mainDiv = document.createElement("div")
mainDiv.setAttribute("id", "main_div")
document.body.append(mainDiv)

// checks if someone is logged in and displays there name 
function loggInMessage() {
    axios.get('/users').then((res) => {
        loggedIn.innerText = "Logged In As:  " + res.data.message

        ingredients()
        
        
     })

}
home()
loggInMessage()

console.log(loggedIn.innerText)


// home if not logged in and ingredients page if and when logged in







