const express = require("express");
const body = require("body-parser");
const exhbs = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(body.urlencoded({extended:false}));
app.use(body.json());
app.use(express.static("public"));
app.engine("handlebars", exhbs({defaultLayout : "main", layoutsDir: "views/layouts"}));
app.set("view engine", "handlebars");
const factory = require("./js/factory-function");
const useFactory = factory();


app.get('/' , (req , res)=>{
    res.render("index");
})
app.post("/submit", function(req,res){
    var text = req.body.text
    console.log(text)
    useFactory.readTheText(text);
    res.redirect("/");
});
app.listen(PORT, ()=>{
    console.log("server started on port " + PORT);
})