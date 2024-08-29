const express = require("express");
const app = express();
const Menu = require("./models/menu.js");
const mongoose = require("mongoose");
const cors = require("cors"); //middleware that is related to security. So that your network packages don't get intercepted by other people.

//middleware section
app.use(cors()); //app.use is a method that applies to every incomming request. This means what is inside is a middleware.

//database connection
mongoose.connect("mongodb://127.0.0.1:27017/fast-food")
    .then(console.log("Connected to database from express"))
    .catch( (err) => {
        console.log("Error connecting to database from express", err)
    });



//main page where the client gets the menu.
app.get("/", async (req, res) => {
    //have to return the menu to the client which they will get from a request.
    const menu = await Menu.findOne({})//.then( data => console.log(data));//there should only be 1 menu. If there are more, search by ID.
    //res.send(menu);
    //console.log("Printed data");
    console.log(menu.items);
    res.send(menu.items);
});


app.listen(3000, () => {
    console.log("Express listening on port 3000")
})