const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,

    //need to define orders variable which will be an array of orders.
})