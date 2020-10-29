var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    name: String,
    dob: String,
    email: String,
    phone: Number
},{minimize:false});
//minimize:false will allow to store empty objects in DB

var User = mongoose.model("Users",userSchema,"Users");

module.exports = User;