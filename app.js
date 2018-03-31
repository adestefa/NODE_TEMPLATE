var express = require("express");
var app = express();
var myPort = 2160; // change port!!


app.use(express.static(__dirname + '/views'));


app.get("/process", function (req, res) {
    res.send("process");
});



var port = process.env.PORT || myPort
app.listen(port, function () {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});


