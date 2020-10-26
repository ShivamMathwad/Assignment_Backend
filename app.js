const express        = require("express");
const bodyParser     = require("body-parser");
const methodOverride = require("method-override");
const mongoose       = require("mongoose");
const app = express();

//Database connection
let url;
if(process.env.DATABASEURL){
    //process.env.DATABASEURL is set on heroku
    url = process.env.DATABASEURL;
} else{
    url = "mongodb://localhost:27017/assignment";
}
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}); 

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

let port = process.env.PORT;
if(port == null || port == "") {
    port = 3000;
}
app.listen(port,() => {
    console.log("Server has started!!");
});