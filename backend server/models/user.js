const mongoose = require("mongoose");
const orderSchema = require("./order.js");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    orders: [orderSchema] //this is a 2d array. an array of arrays. Each index points to other arrays.
})

const User = mongoose.model("User", userSchema);
module.exports = User;