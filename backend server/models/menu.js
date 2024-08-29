const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    src: String
}, {_id: false});//we don't want each menu item to have IDs themselves, only the whole menu should have an id.
const menuSchema = new mongoose.Schema({
    items: [menuItemSchema]
})

const Menu = mongoose.model("Menu", menuSchema);
//exports is an object but we're setting it to the Menu const variable. Which means we are now exporting a variable instead of an object.
module.exports = Menu;