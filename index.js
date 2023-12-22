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
    console.log("This is text edit: "+textEdit);
    data.push(text);
    console.log(data);
    res.render("index.ejs", {arr:data});
})

app.get("/blogs",(req,res)=>{
    let lastItem = data.length -1;
    console.log("last item number: "+lastItem);
    console.log("last item: "+data[lastItem]);
    res.render("blogs.ejs",{lastBlog: data[lastItem]})
})

app.get("/about", (req,res)=>{

})

app.get("/contact",(req, res)=>{

})

app.post("/blogs", (req,res)=>{

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


