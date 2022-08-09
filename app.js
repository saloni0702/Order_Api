const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const app = express();
const dotenv = require("dotenv");
const signupRoute = require("./Routes/signup")
const inventoryRoute = require("./Routes/inventory")
const orderRoute = require("./Routes/order")
const detailRoute = require("./Routes/detail")
const cors = require("cors");
app.use(cors());
app.use(express.json({limit: "30mb", extended:true}));
app.use(express.urlencoded({ extended: false }));
dotenv.config();

app.set("view engine","ejs");
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
    if(!err)
    {
        console.log("Database connect successfully");
    }
    else
    {
        console.log(err);
    }
});

app.listen(process.env.PORT || 8800,(err)=>{
    if(!err)
    {
        console.log(`Server is running on port`);
    }
    else
    {
        console.log(err);
    }
});

app.post("/",(req,res)=>{
    res.redirect("/inventory")
})

app.get("/",(req,res)=>{
    res.render("home");
});


app.use("/signup", signupRoute);
app.use("/inventory",inventoryRoute);
app.use("/order",orderRoute);
app.use("/detail",detailRoute);