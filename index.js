const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const templatePath = path.join(__dirname,"template/views");
const itemPath = path.join(__dirname,"template/items")
app.set('view engine','hbs');
app.set('views',templatePath);
app.use(express.static(itemPath))
app.get("/", async(req,res) => {
    try{
        res.render("index");
    }catch(err){
        console.log(err);
    }
    
});
app.get("/login",(req,res) => {
    res.render("login")
})
app.get("/check",(req,res) => {
    res.send("hello");
})
app.listen(8000,() => {
    console.log("i am running")
})