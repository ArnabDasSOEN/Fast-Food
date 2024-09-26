const mongoose = require("mongoose");
const {itemSchema} = require("./item.js")


const orderSchema = new mongoose.Schema({
    order: [itemSchema]
},{_id: false})

module.exports = orderSchema;