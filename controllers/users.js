const express = require('express');

const bcrypt = require("bcrypt");

const users = require("../models/users_model");

const ingredients = require("../models/ingredients_model");

const router = express.Router();


router.get('/', (req, res) => {
    if (req.session.username) {
        res.json({message: req.session.username});
    }
    
})


router.post('/', (req, res) => {
    console.log(req.body[1])
    passwordHash = bcrypt.hashSync(req.body[0].password, bcrypt.genSaltSync(10), null);
    users.addUser(req.body[0].name, req.body[0].email, passwordHash).then((s) => {
        users.login(req.body[0].email).then((res) => {
            for (ing of req.body[1]) {
                ingredients.addIngredient(res[0].id, ing.ingredients)
            }
        })
        res.json({ status: "ok"})  
    })
    

})

router.post('/login', (req, res) => {

    users.login(req.body.email).then((userResponse) => {
        let check = bcrypt.compareSync(req.body.password, userResponse[0].password);
        console.log(check)
        if (userResponse.length === 0 || check === false) {
            res.status(400).json({message: 'Password or Email Is Incorrect'});
            return
        } else {
            req.session.username = userResponse[0].name
            //sessionStorage.setItem("name", `${userResponse[0].name}`);
            req.session.userId = userResponse[0].id
            res.json({ message: 'logged in successfully', loggedIn: userResponse[0].name })
            
        }
        
    })
});

router.delete("/", (req, res) => {
    req.session.destroy();
    res.json({ message: "You have logged out successfully" });
  });



module.exports = router;