const express = require("express");
const app = express();
app.use(express.static("template"));
app.get("/",(req,res) => {
    res.render("index")
});
app.listen(8000,() => {
    console.log("i am running")
})