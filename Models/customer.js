const mongoose = require("mongoose")

const CustomerSchema = new mongoose.Schema({
    Customer_Id:{
        type: String,
        required: true
    },
    Customer_name:{
        type:String,
        required:true
    }
    ,
    Customer_Email:{
        type: String,
        required: true
    }
    
    
})
const CustomerModel = mongoose.model("customer",CustomerSchema);
module.exports = CustomerModel;