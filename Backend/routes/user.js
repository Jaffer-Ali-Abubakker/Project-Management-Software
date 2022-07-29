const express = require("express");
const User = require("../models/user");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authHelpers = require("../helpers/auth-helpers");

router.post("/register", (req, res, next) => {
  let email = req.body.email
  let mobile = req.body.mobile
  authHelpers.emailcheck(email, mobile).then((response)=>{
    if(response){
      res.status(401).json({
        message:"User Already exist",
        result: response
      })
    }
    authHelpers.doRegister(req.body).then((response) => {
      res.status(201).json({
        message: "User created",
        result: response,
     })

    });
  });
});

router.post("/login", (req, res, next) => {
  let fetchUser;
  User.findOne({ email: req.body.email })
    .then((user) => {
      console.log(user);
      if (!user) {
        return res.status(401).json({ 
          message: "Auth failed",
        });
      }
      fetchUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then((result) => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      const token = jwt.sign(
        { email: fetchUser.email, userId: fetchUser._id },
        "secret_this_should_be_longer",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
      });
    })
    .catch((err) => {
     console.log(err);
    });
});

module.exports = router;
