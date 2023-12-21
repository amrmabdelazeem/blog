import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.render("index.ejs");
})

app.get("/blogs",(req,res)=>{

})

app.get("/about", (req,res)=>{

})

app.get("/contact",(req, res)=>{

})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}.`);
})