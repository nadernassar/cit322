var express = require("express");
var app = express();
var port = 8080;
 
app.get("/", function(req, res){
    res.send("It works! Thx C9");
});
 
app.listen(port);
console.log("Listening on port " + port);