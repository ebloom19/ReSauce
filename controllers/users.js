const express = require('express');

const users = require("../models/users_model");

const router = express.Router();


router.get('/', (req, res) => {
    if (req.session.username) {
        res.json({message: req.session.username});
    }
    
})


router.post('/', (req, res) => {
    
    users.addUser(req.body.name, req.body.email, req.body.password).then((s) => {
        res.json({ status: "ok"})
    })
})

router.post('/login', (req, res) => {

    users.login(req.body.email, req.body.password).then((userResponse) => {
        //console.log(userResponse[0].name)
        if (userResponse.length === 0) {
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