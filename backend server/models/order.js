const mongoose = require("mongoose");
const {itemSchema} = require("./item.js")


const orderSchema = new mongoose.Schema({
    order: [itemSchema]
})

module.exports = orderSchema;