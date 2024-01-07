const express = require("express");
const app = express();
const path = require("path");
const templatePath = path.join(__dirname,"template")
app.use(express.static(templatePath));
app.get("/",(req,res) => {
    res.render("index")
});
app.get("/check",(req,res) => {
    res.send("hello");
})
app.listen(8000,() => {
    console.log("i am running")
})