const express = require("express");
const app = express();
const Menu = require("./models/menu.js");
const mongoose = require("mongoose");
const cors = require("cors"); //middleware that is related to security. So that your network packages don't get intercepted by other people.

//middleware section
app.use(cors()); 
app.use(express.json()); //Axios by default sends JS objects in JSON format, so we parse the body with JSON instead of urlencoded


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


app.post("/signup", (req, res) => {
    console.log("POST request to /signup");
    console.log(req.body);
    res.status(200).send("signed up succesfully");
});


app.listen(3000, () => {
    console.log("Express listening on port 3000")
})