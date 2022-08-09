const mongoose = require("mongoose")

const InventorySchema = new mongoose.Schema({
    Inventory_Id:{
        type: String,
        required: true
    },
    Inventory_Type:{
        type:String,
        required:true
    }
    ,
    Item_Name:{
        type: String,
        required: true
    },
    Quantity:{
        type:String,
        required:true
    }
    
})
const InventoryModel = mongoose.model("inventory",InventorySchema);
module.exports = InventoryModel;
