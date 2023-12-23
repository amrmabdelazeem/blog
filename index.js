import express from "express";
import ejs, { name } from "ejs";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const data = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res)=>{
    res.render("index.ejs", {arr:data});
})

app.post("/",(req, res)=>{
    let user = req.body["user"];
    let text = req.body["text"];
    let id =req.body["id"];

    if(text !== undefined){
        data.push(text);
    }
    let textEdit = req.body["textEdit"];
    if(textEdit !== undefined){
        data[id] = textEdit;
    }
    res.render("index.ejs", {arr:data});

})


app.post("/blog",(req,res)=>{
    let currentPost = req.body["textEdit"];
    let index = req.body["id"];
    let dataEdit = data[Number(index)];
    res.render("blogs.ejs",{dataToEdit: dataEdit, id: index})
})
app.get("/blog",(req,res)=>{
    res.render("blogs.ejs")
})


app.get("/contact",(req, res)=>{
    res.render("contact");
})

app.get("/about", (req,res)=>{
    res.render("about.ejs");
})

app.post("/delete", (req,res)=>{
    let currentPost = req.body["textEdit"];
    
    const index = data.indexOf(currentPost);
    data.splice(index);
    res.redirect("/");
})
app.listen(port, ()=>{
    console.log(`Listening on port ${port}.`);
})