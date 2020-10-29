const express = require("express");
let router = express.Router();

//Schema Setup
const User = require("./Models/users");
const Email = require("./email");

//Routes
router.get("/", (req, res) => {

    User.find({}, (err, allUsers) => {
        if (err) {
            console.log(err);
        } else {
            res.send(allUsers);
        }
    });
});

router.post("/", async (req, res) => {

    let { name, dob, email, phone } = req.body;

    let responseObject = {
        "Result": "",
        "Error": ""
    }

    let userModel = (await User.findOne({ name: name }));
    //User Exists 
    if (userModel) {
        responseObject.Result = "Fail";
        responseObject.Error = "User Already Exists";
    }

    //User doesnt Exist
    else {
        //Invalid Phone Number
        if (phone.toString().length < 10 || phone.toString().length > 10) {
            responseObject.Result = "Fail";
            responseObject.Error = "Invalid Phone Number";
        }
        //Everything valid
        else {
            let userSaveModel = new User({ name: name, phone: phone, dob: dob, email: email })
            userSaveModel.save();
            responseObject.Result = "Success";
            responseObject.Error = null;
        }
    }

    res.send(responseObject)

});

module.exports = router;