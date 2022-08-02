const path = require("path");
const bodyParser = require('body-parser');
const experss = require('express');
const mongoose = require("mongoose");
const cors = require ("cors")

const userRoutes = require("./routes/user")
const projectManagerRoutes = require('./routes/project-Manager')

const app = experss();

mongoose.connect("mongodb+srv://Jaffer-Ali:FlVV6jHYPdGdyolK@cluster1.3scmpgg.mongodb.net/Project-Management-site")
.then(() =>{
    console.log("conncted to database");
})
.catch((err) =>{
    console.log(err);
    console.log("conncted failed");
})

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });
app.use("/api/user", userRoutes);
app.use("/api/project-Manager", projectManagerRoutes)

module.exports = app;
