const express = require("express");
const router = express.Router();
const InventoryModel = require("../Models/inventory");


router.post("/", async (req,res)=>
{

   await InventoryModel.find({Inventory_Id:req.body.id})
   .then((data)=>
   {
    if(data.length)
    {
        res.status(400).send("Id already Exists")
    }
    else
    {
    	InventoryModel.find({Item_Name:req.body.name}).then((data)=>{
		if(data.length)
		{
			res.status(400).send("Inventory already exist")
		}
		else
		{
			InventoryModel.create({Inventory_Id:req.body.id ,Inventory_Type:req.body.type, Item_Name:req.body.name, Quantity: req.body.quantity}).then((user)=>{
					res.status(200).send({user});
				}).catch((err)=>{
					console.log(err);
			})
		}
		})
	}
	})
})

router.get("/", (req,res)=>{
    InventoryModel.find().then((invent)=>{
        res.render("inventory",{invent});    
    })  
});

module.exports = router;