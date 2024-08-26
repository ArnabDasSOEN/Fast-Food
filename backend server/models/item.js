const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: number, //mongoose.Decimal128, //or mongoose.Schema.Types.Decimal128
        required: true 
    }
})