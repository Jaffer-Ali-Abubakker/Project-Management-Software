const mongoose = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator")

const userSchema = mongoose.Schema({
    FullName : {type : String, required: true},
    email    : { type: String, required: true, unique: true},
    mobile   : { type: Number, required: true, unique: true},
    password : { type: String, required: true},
    position : { type: String }
});

userSchema.plugin(uniqueValidator); 

module.exports = mongoose.model("User", userSchema);