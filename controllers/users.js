const express = require('express');

const users = require("../models/users_model");

const router = express.Router();

router.post('/', (req, res) => {
    
    users.addUser(req.body.name, req.body.email, req.body.password).then((s) => {
        res.json({ status: "ok"})
    })
})

router.post('/login', (req, res) => {
    
    users.login(req.body.email, req.body.password).then((userResponse) => {
        console.log(userResponse)
        if (userResponse.length === 0) {
            res.status(400).json({message: 'Password or Email Is Incorrect'});
            return
        } else {
            res.json({ message: 'logged in successfully' })
        }
        
    })
});



module.exports = router;