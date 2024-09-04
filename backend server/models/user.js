const mongoose = require("mongoose");
const orderSchema = require("./order.js");
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    orders: [orderSchema], //this is a 2d array. an array of arrays. Each index points to other arrays.
    isAdmin: Boolean //user or admin. Admin accounts can only be created through the mongo shell, but we need to know the user's authority for permissions.
})

userSchema.statics.authenticate = async function(username, password){
    const user = await this.findOne({username})
    if(!user){ //means incorrect username
        return false;
    }
    const isRealUser = await bcrypt.compare(password, user.password);
    return isRealUser ? user : false;
}

const User = mongoose.model("User", userSchema);
module.exports = User;