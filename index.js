// first read the detail file for your concept and to understand the whole senario 
// and give me a quickly feedback  by pressing star 
const express = require("express");
const mongoose = require("mongoose");
const User = require('./src/models/model')
const router = require("./src/routes/user/user.controller");
const app = express();
// by default middleware
app.use(express.json());

// Connecting app to mongodb database 
mongoose.connect("mongodb://0.0.0.0:27017/cruddatabase")
    .then(() => console.log("connected to mongodb"))
    .catch((error) => console.log("couldn't connected to mongodb"));

// now i am going to write a scheme for registration page in models folder 
// ............. 

// schema is created now i am writing crud operation in routes folder

// here you are going to declare a final route where all crud use after this endpoint 
// import it first 
app.use("/users", router);
// our app will listen on this server port number     
app.listen(5000, () => console.log("server is running"));