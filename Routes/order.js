const express = require("express");
const router = express.Router();
const OrderModel = require("../Models/order");
const CustomerModel = require("../Models/customer");
const InventoryModel = require("../Models/inventory");

router.post("/", async (req,res)=>
{
    await CustomerModel.find({Customer_Email:req.body.email}).then((customer)=>{
        if(customer.length)
        {
            console.log(customer[0])
            InventoryModel.find({Item_Name:req.body.name}).then((inventory)=>{
                if(inventory.length)
                {
                    let a = parseInt(inventory[0].Quantity)
                    let b = parseInt(req.body.quantity)
                    if(b < a)
                    {
                        OrderModel.create({Customer_Id:customer[0].Customer_Id ,Inventory_Id: inventory[0].Inventory_Id, 
                        Item_Name:req.body.name, Quantity: req.body.quantity})
                        .then((user)=>{
                            console.log(user);
                            let c = a-b;
                            console.log(c);
                            let d = c.toString();
                            console.log(d);
                            InventoryModel.updateOne({Inventory_Id:inventory[0].Inventory_Id},{Quantity:d}).then((user1)=>{

                                res.redirect("/detail");  
                            })

                        }).catch((err)=>{
                            console.log(err);
                        })
                    }
                    else
                    {
                        res.status(400).send("Out of Stock")
                    }
                }
                else
                {
                    res.status(400).send("Inventory not exist")
                }
            })
        }
        else
        {
            res.status(400).send("User Not Exist")
        }
    })
})

router.get("/",(req,res)=>{
    res.render("order")
})


module.exports = router;