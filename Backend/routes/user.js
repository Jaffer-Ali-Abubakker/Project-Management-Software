const express = require("express");
const User = require("../models/user");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authHelpers = require("../helpers/auth-helpers");


router.post('/register', (req, res, next) => {
  console.log(req.body);
  const { FullName, email, mobile, password } = req.body
  if (!email || !password ) {
      return res.status(422).json({error: "please fill the details"})
  }

  User.findOne({ email: email }).then((savedUser) => {
      if (savedUser) {
          return res.status(422).json({ error: "user already exists with that email" })
      }

      bcrypt.hash(password, 12).then((hashedPassword) => {
          const user = new User({
              FullName,
              email,
              mobile,
              password: hashedPassword,
          })

          user.save().then((user) => {
              res.json({ message: 'saved successfully' })
          }).catch((err) => {
              console.log(err);
              if(err.code === 11000){
                  return res.status(422).json({ error: "user name already taken" })
              }
          })
      })

  }).catch(() => {
      console.log(err);
  })

})

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
