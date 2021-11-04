console.log("hello world")

header()

const headerNav = document.getElementById("header-nav")
const loggedIn = document.createElement('h4')
loggedIn.setAttribute('id', 'loggin_message')
headerNav.append(loggedIn)

const mainDiv = document.createElement("div")
mainDiv.setAttribute("id", "main_div")
document.body.append(mainDiv)


home()
loggInMessage()












