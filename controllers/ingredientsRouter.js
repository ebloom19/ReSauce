
const express = require('express');

const ingredients = require("../models/ingredients_model");

const router = express.Router();

let tempIngredients = []

router.post('/', (req, res) => {
    if (!req.session.username) {
        tempIngredients.push({ingredients:req.body.ingredient})
        console.log(tempIngredients)
    }else{
    
    userID  =  req.session.userId
    
    ingredients.addIngredient(userID, req.body.ingredient).then((s) => {
        res.json({ status: "ok"})
    })
}
})

router.get('/', (req, res) => {
    userID  =  req.session.userId
    ingredients.getIngredients(userID).then((response) => {
        if (!req.session.username){
            res.json(tempIngredients)
        }else{
        res.json(response)
        }
    })
})

router.delete("/:id", (req, res) => {
    userID  =  req.params.id
    ingredients.deleteIngredients(userID)
  });
  



// module.exports = router;

exports.router = router
exports.tempIngredients = tempIngredients
