const express = require("express");
const exphdbs = require("express-handlebars");
const bodyParser = require('body-parser');
const productArray = require("./model/products");
const app = express();



app.engine("handlebars", exphdbs());
app.set("view engine", "handlebars");
app.use(bodyParser.urlencoded({ extended: false }));



app.use(express.static("public"));

app.get("/", (req, res) => {

    res.render("home", {
        title: "Home page"

    })

});


app.get("/products", (req, res) => {
    res.render("products", {
        title: "Products",
        products: productArray.getAllProducts(),
    });
});


 
app.get("/registration", (req, res) => {
    res.render("registration", {
        title: "Registration"
    });
});
app.post("/registration", (req,res)=>{
    const errors= [];
    if(req.body.name==""){
        errors.push(`Please input your name!`);
    }

    if(req.body.email==""){
        errors.push(`Please input your email!`);
    }
    if(req.body.password==""){
        errors.push(`Please input your password!`);
    }
    if(req.body.Password==""){
        errors.push(`The two password must be the same!`);
    }
    if(errors.length>0){
        res.render("registration",{
            title:"Registration",
            resErrors: errors,
        });
    }
  console.log(`the name is ${req.body.name}`);
  console.log(`the email is ${req.body.email}`);
  console.log(`the password is ${req.body.password}`);
  console.log(`the confirmation is ${req.body.Password}`);

});


app.get("/login", (req, res) => {
    res.render("login", {
        title: "Login"
    });
});
app.post("/login", (req, res) => {
    const errors = [];
    if (req.body.email2 == "") {
        errors.push("Please input your email!");
    }
    if (req.body.password2 == "") {
        errors.push("Please input your password! ");
    }
    if (errors.length > 0) {
        res.render("login", {
            title: "Login",
            errorsArray: errors});
    }
    else {
       res.redirect("/");
    }
    console.log(`the email is: ${req.body.email2}`);
});


const port = 3000;
app.listen(port, () => {
    console.log(`The web server is created at the port ${port}`);
})