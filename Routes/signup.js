const express = require("express");
const router = express.Router();
const CustomerModel = require("../Models/customer");


router.post("/", async (req,res)=>
{

   await CustomerModel.find({Customer_Id:req.body.id})
   .then((data)=>
   {
    if(data.length)
    {
        res.status(400).send("User Exists")
    }
    else
    {
		CustomerModel.create({Customer_Id:req.body.id ,Customer_name:req.body.name, Customer_Email: req.body.mail}).then((user)=>{
					res.status(200).send({user});
				}).catch((err)=>{
					console.log(err);
			})
	}
	})
})

router.get("/", (req,res)=>{
    CustomerModel.find().then((user)=>{
        res.render("signup",{user});    
    })  
});

module.exports = router;