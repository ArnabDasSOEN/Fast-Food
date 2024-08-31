const mongoose = require("mongoose");
const orderSchema = require("./order.js");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    orders: [orderSchema], //this is a 2d array. an array of arrays. Each index points to other arrays.
    isAdmin: Boolean //user or admin. Admin accounts can only be created through the mongo shell, but we need to know the user's authority for permissions.
})

const User = mongoose.model("User", userSchema);
module.exports = User;