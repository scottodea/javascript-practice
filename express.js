const express = require("express");
const bodyParser = require("body-parser");
const handle = require("express-handlebars");
const app = express();
const port = 3000;
const students = require("./students.js")
const rest = require("./restaurant.js")
app.engine("handlebars", handle({defaultLayout: "main"}));
app.set("view engine", "handlebars");



app.use(bodyParser.urlencoded({extended: false}));



app.get("/", (req, res) => {
  res.render("home", {student1: students.student[Math.floor(Math.random()*5)], 
    student2: students.student[Math.floor(Math.random()*5)], 
    student3: students.student[Math.floor(Math.random()*5)], 
    restaurant: rest.restaurant[Math.floor(Math.random()*5)]})
});

app.get("/students", (req, res) =>{
  res.send("You're on students mofo")
});
app.get("/api/restaurants", (req, res) =>{
  res.render("restaurant", {display: rest.restaurant})
})
app.post("/api/restaurants", (req,res) =>{
  rest.restaurant.push(req.body.name)
})
app.post("/students", (req, res)=>{

  students.push(req.body.name)
  res.send("create new student")
});

  


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});

