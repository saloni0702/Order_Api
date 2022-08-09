const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    Customer_Id:{
        type: String,
        required: true
    },
    Inventory_Id:{
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
const OrderModel = mongoose.model("order",OrderSchema);
module.exports = OrderModel;