const express = require("express");
const app = express();
const Menu = require("./models/menu.js");
const User = require("./models/user.js");
const mongoose = require("mongoose");
const cors = require("cors"); //middleware that is related to security. So that your network packages don't get intercepted by other people.
const AppError = require("./AppError.js"); //if you're requiring a file, you need to specify it through relative paths
const bcrypt = require("bcrypt") //if you require a module inside node_modules, you don't need to define a relative path. 

//middleware section
app.use(cors()); 
app.use(express.json()); //Axios by default sends JS objects in JSON format, so we parse the body with JSON instead of urlencoded

app.use((err, req, res, next) => {
    const {status = 500, message = "Error server side" } = err;
    res.status(status).send(message);
})

//database connection
mongoose.connect("mongodb://127.0.0.1:27017/fast-food")
    .then(console.log("Connected to database from express"))
    .catch( (err) => {
        console.log("Error connecting to database from express", err)
    });


//RESTful API
//main page where the client gets the menu.
app.get("/", async (req, res) => {
    const menu = await Menu.findOne({})
   // console.log(menu.items);
    res.send(menu.items);
});


app.post("/signup", async (req, res, next) => {
    console.log("\nPOST request to /signup");
    const {username, password} = req.body
    const user = await User.findOne({username:username});
    //if the username exists, create an error object and give it to the error handler defined
    if (user){
        return next(new AppError(409, "an account with that username already exists. Please try again"));
    }
    console.log("creating a new account");
    const hash = await bcrypt.hash(password, 12);
    const theNewUser = new User({username, password:hash, isAdmin:false, orders:[]});
    await theNewUser.save();
    res.status(200).send("signed up succesfully");
});


app.listen(3000, () => {
    console.log("Express listening on port 3000")
})