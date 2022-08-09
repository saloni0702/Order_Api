const express = require("express");
const router = express.Router();
const OrderModel = require("../Models/order");

router.get("/", (req,res)=>{
    OrderModel.find().then((order)=>{
        res.render("detail",{order});    
    })  
});

module.exports = router;