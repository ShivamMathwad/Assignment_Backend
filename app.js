const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const app = express();

const routes = require("./routes");

//Database connection
if(process.env.DATABASEURL){
    //process.env.DATABASEURL is set on heroku
    url = process.env.DATABASEURL;
} else{
    url = "mongodb://localhost:27017/assignment";
}
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

app.use((req, res, next) => { res.setHeader('Access-Control-Allow-Origin', '*'); res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); next(); });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));


//Routes
app.use(routes);


let port = process.env.PORT;
if (port == null || port == "") {
    port = 8080;
}
app.listen(port, () => {
    console.log("Server has started!!");
});