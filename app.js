
const path = require("path");

const express = require("express");
const { render } = require("ejs");

const defaultRoutes = require("./routes/default-routes");
const restaurantRoutes = require("./routes/restaurant-routes");

const app = express();

// app.get("/", function(req, res){
//     res.send("<h1>Hello World!</h1>")
// })

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));
app.use("/", defaultRoutes);
app.use("/", restaurantRoutes)





app.use(function(req, res){
    res.status(404).render("404");
})

app.use(function(error, req, res, next){
    res.status(500).render("500")
})


app.listen(3000);
