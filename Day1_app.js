const app = require("express")()


//Alternative
//const express =require("express")
//const app = express()

app.get("/",(req,res)=>{
    //res.send("Hello i am Home page")
    res.json({
        Manan: "I am Manan Neupane"
    })
})
app.get("/contact",(req,res)=>{
   res.send("I am from contact");
})
app.get("/about",(req,res)=>{
   res.send("I am about page")
})
app.listen(2000,(req,res)=>{
    console.log("Nodejs has started at port 2000")
})