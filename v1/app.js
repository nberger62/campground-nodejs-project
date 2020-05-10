var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Salmon Creek", image: "https://tse3.mm.bing.net/th?id=OIP.YKi4Kc7Rm9UKx7-qceM1-gHaEK&pid=Api&P=0&w=298&h=168"},
    {name: "Riverside", image: "https://tse1.mm.bing.net/th?id=OIP.RnNkpMQiOtux-sh6JvjMRgHaEZ&pid=Api&P=0&w=299&h=178"},
    {name: "Black bear Camp", image: "https://tse1.mm.bing.net/th?id=OIP.U3GTh6D-2QCr_IaAocDFRgHaDt&pid=Api&P=0&w=354&h=178"},
    {name: "Salmon Creek", image: "https://tse3.mm.bing.net/th?id=OIP.YKi4Kc7Rm9UKx7-qceM1-gHaEK&pid=Api&P=0&w=298&h=168"},
    {name: "Riverside", image: "https://tse1.mm.bing.net/th?id=OIP.RnNkpMQiOtux-sh6JvjMRgHaEZ&pid=Api&P=0&w=299&h=178"},
    {name: "Black bear Camp", image: "https://tse1.mm.bing.net/th?id=OIP.U3GTh6D-2QCr_IaAocDFRgHaDt&pid=Api&P=0&w=354&h=178"},
    {name: "Salmon Creek", image: "https://tse3.mm.bing.net/th?id=OIP.YKi4Kc7Rm9UKx7-qceM1-gHaEK&pid=Api&P=0&w=298&h=168"},
    {name: "Riverside", image: "https://tse1.mm.bing.net/th?id=OIP.RnNkpMQiOtux-sh6JvjMRgHaEZ&pid=Api&P=0&w=299&h=178"},
    {name: "Black bear Camp", image: "https://tse1.mm.bing.net/th?id=OIP.U3GTh6D-2QCr_IaAocDFRgHaDt&pid=Api&P=0&w=354&h=178"}
];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds",{campgrounds:campgrounds});
})

app.post("/campgrounds", function(req, res){
    // add data aka campgrounds to the array above
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(3000, function(){
    console.log("Server is running for v1 Yelpcamp");
});