const express = require("express");

const ensureAuth = (req, res, next) => {
    if (!req.session.username) {
        res.status(401).json({message: "Please Log In or Sign Up To Continue!"});
    } else {
        next();
    }
  }
  
  module.exports = ensureAuth; 