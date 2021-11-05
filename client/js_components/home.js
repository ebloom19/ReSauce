console.log("hello home")





function home() {
    mainDiv.innerHTML = ''
    const intro = document.createElement("p")
    intro.setAttribute("id", "intro")
    intro.innerText = `Re 'Sauce' your left over ingredients and transform them into succulent 
                       meals. Using our unique web-integrated tracker, you can now list all your 
                       ingredients and our internal servers will automatically 'sauce' delicious gourmet 
                       meals you can cook, which include all the listed ingredients.
                       
                       Feel free to give it a try by heading over to the 'Ingredients' page above.`

    mainDiv.append(intro)                   
}