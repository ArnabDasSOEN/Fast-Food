const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },

    price: {
        type: Number,
        required: true,
        mind: 0
    },

    src: String
})


const menuSchema = new mongoose.Schema({
    items: [menuItemSchema]
})

const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;