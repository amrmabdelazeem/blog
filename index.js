import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const data = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.render("index.ejs", {arr:data});
})

app.post("/",(req, res)=>{
    let user = req.body["user"];
    let text = req.body["text"];
    if(text !== undefined){
        data.push(text);
    }
    console.log("old text: "+text);
    console.log(data);
    let lastItem = data.length;
    let textEdit = req.body["textEdit"];
    if(textEdit !== undefined){
        console.log("this textedit: "+textEdit);
        data[lastItem-1] = textEdit;
        console.log("after edit:"+data);
    }
    res.render("index.ejs", {arr:data});
    

})

app.get("/blogs",(req,res)=>{
    let lastItem = data.length;
    console.log("last item: "+data[lastItem-1]);
    res.render("blogs.ejs",{lastBlog: data[lastItem-1]})
})

app.get("/about", (req,res)=>{

})

app.get("/contact",(req, res)=>{

})

app.get("/delete", (req,res)=>{
    data.pop();
    res.redirect("/");
})
app.listen(port, ()=>{
    console.log(`Listening on port ${port}.`);
})


// Implement the post creation feature. This includes creating the form on the home page and handling the form submission in the server.

// Implement the post viewing feature. This includes displaying all the posts on the home page.

// Implement the post edit feature. This includes using a form to load the existing blog post and allowing the user to edit and save the post.

// Implement the delete feature. This allows the user to click a button and remove the post from the home page.

// Implement the alternative list to show a different set of todo tasks.

// Test the application to ensure that post creation and viewing are working correctly.


