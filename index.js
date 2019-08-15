var express = require("express");
var path = require("path");
var app = express();
app.use(express.static(path.join(__dirname, "public")));
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});
var server = app.listen(3000, function() {});
