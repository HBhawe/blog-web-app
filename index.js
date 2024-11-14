import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static("public"));

app.get("/", (req, res) => {
    // res.render("index.ejs", {blog: blog});
    let formSubmission = req.body;
    let blogName = formSubmission.blogName;
    let blogContent = formSubmission.blogContent;
    blog.push({name: blogName, content: blogContent});
    res.render("index.ejs", {blog: blog});
})

app.get("/about", (req, res) => {
    res.render("about.ejs");
})

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
})

app.get("/blog", (req, res) => {
    res.render("blog.ejs");
})

app.post("/", (req, res) => {
    let formSubmission = req.body;
    let blogName = formSubmission.blogName;
    let blogContent = formSubmission.blogContent;
    blog.push({name: blogName, content: blogContent});
    res.render("index.ejs", {blog: blog});
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

const blog = [];