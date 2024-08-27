const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number, //mongoose.Decimal128 or mongoose.Schema.Types.Decimal128 if it doesnt allow decimal values.
        required: true,
        min:0
    }
})

//need to create new model.
const Item = mongoose.model("Item", itemSchema);
//need to export the Model for the main index.js file.
//also need to export the schema to be used in order model files.
module.exports.Item = Item;
module.exports.itemSchema = itemSchema;

//"module" is just an object that contains meta data about this module.
//"exports" is just an object that sits as a property inside the module object. Hence, you can just do module.exports = {Item, itemSchema}
//when you import, you do: const obj = require("./models/item.js") but this imports the entire "exports" object from this file. Hence you can destructure like
//const {Item, itemSchema} = require("./models/item.js");
